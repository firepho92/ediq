import React from 'react'
import ViewTransition from '../animations/ViewTransition'
import HeritageContext from '../context/HeritageContext'
import UserContext from '../context/UserContext'

export default function HeritageProductsView() {
  const { heritage } = React.useContext(HeritageContext)
  const [products, setProducts] = React.useState(heritage)

  const handleFilter = (subject) => {
    if(subject === '') {
      setProducts(heritage)
    } else {
      const productsFiltered = heritage.filter(product => product.subject === subject)
      setProducts(productsFiltered)
    }
  }

  return (
    <ViewTransition>
      <div style={ flexGrid }>
        { products.map(product => <Product key={ product._id } product={ product } />) }
      </div>
    </ViewTransition>
  )
}

function Product(props) {
  const { user, setUser } = React.useContext(UserContext)
  const [buttonString, setButtonString] = React.useState('Adquirir')

  const handleGetButton = () => {
    let userCopy = user
    userCopy.products.push(props.product)
    setButtonString('Adquirido')
    setUser(userCopy)
  }

  return (
    <ViewTransition>
      <div className='box grow' style={ flexItem }>
        <img src={ props.product.cover } alt='Cover' />
        <div style={{ padding: '0.5rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <div style={{ display: 'flex' }}>
            <button className='button is-link is-small' onClick={ handleGetButton } disabled={ (user.products.find(element => element._id === props.product._id)) ? true : false } >
              { buttonString }
            </button>
          </div>
        </div>
      </div>
    </ViewTransition>
  )
}
//{ display: 'flex', flexDirection: 'column', flex: 1, maxWidth: '10rem', width: '10rem', padding: '0em', overflow: 'hidden', cursor: 'pointer', margin: '0 1em 0 1em' }
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
  margin: '2rem',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '10rem',
	alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '5px',
  overflow: 'hidden',
  cursor: 'pointer'
}