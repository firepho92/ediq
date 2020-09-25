import React from 'react'
import UserContext from '../context/UserContext'
import HeritageContext from '../context/HeritageContext'
import RouterContext from '../context/RouterContext'
import ViewTransition from '../animations/ViewTransition'
import ProductPresentation from '../components/ProductPresentation'

export default function EducationSupportView() {
  const { heritage } = React.useContext(HeritageContext)
  const [products, setProducts] = React.useState(heritage)

  return(
    <div style={flexGrid }>
      { products.map(product => <Product key={ product._id } product={ product } />) }
    </div>
  )
}

function Product(props) {
  const { user, setUser } = React.useContext(UserContext)
  const { pushView } = React.useContext(RouterContext)
  const [buttonString, setButtonString] = React.useState('Entrar')

  const handleGetButton = () => {
    let userCopy = user
    userCopy.products.push(props.product)
    setButtonString('Revisar')
    setUser(userCopy)
    pushView(<ProductPresentation product={ props.product } />)
  }

  return (
    <ViewTransition>
      <div className='box grow' style={ flexItem }>
        <img src={ props.product.cover } alt='Cover' />
        <div style={{ padding: '0.5rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <div style={{ display: 'flex' }}>
            <button className='button is-link is-small' onClick={ handleGetButton } >
              { buttonString }
            </button>
          </div>
        </div>
      </div>
    </ViewTransition>
  )
}

const flexGrid = {
  padding: '2rem 0.5rem 0 0.5rem',
  height: '90vh',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-start'
}

const flexItem = {
  padding: 0,
  position: 'relative',
  margin: '2rem 0.5rem 0rem 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '10rem',
	alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '5px',
  overflow: 'hidden',
  cursor: 'pointer'
}