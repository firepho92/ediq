import React from 'react'
import ViewTransition from '../animations/ViewTransition'
import HeritageContext from '../context/HeritageContext'
import ProductsFilter from '../components/ProductsFilter'
import UserContext from '../context/UserContext'
import LevelsView from '../views/LevelsView'

export default function OwnedProducts() {
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

  const handleSearch = (str) => {

  }

  return (
    <LevelsView />
    /*<ViewTransition>
      <div className='column is-4' style={{ paddingTop: '4.25rem', display: 'flex', flexDirection: 'row' }}>
        <div className='field'>
          <p className='control has-icons-right'>
            <input className='input' type='text' placeholder='Buscar' required />
            <span className="icon is-small is-right">
              <i className="fas fa-search"></i>
            </span>
          </p>
        </div>
        <ProductsFilter handleFilter={ handleFilter } />
      </div>
      <div className='columns' style={{ display: 'flex',  flexFlow: 'column wrap', padding: '1em 2em 2em 2em'}}>
        { products.map(product => <Product key={ product._id } product={ product } />) }
      </div>
    </ViewTransition>*/
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
      <div className='box grow' style={{ display: 'flex', flexDirection: 'column', flex: 1, maxWidth: '10rem', width: '10rem', padding: '0em', overflow: 'hidden', cursor: 'pointer', margin: '0 1em 0 1em' }}>
        <img src={ props.product.cover } alt='Cover' />
        <div style={{ padding: '0.5rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <div style = {{ display: 'flex' }}>
            { props.product.title }
          </div>
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