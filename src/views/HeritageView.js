import React from 'react'
import ViewTransition from '../animations/ViewTransition'
import ProductsWrapper from '../components/ProductsWrapper'
import HeritageContext from '../context/HeritageContext'
import ProductsFilter from '../components/ProductsFilter'

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
    <ViewTransition>
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
      <div className='columns' style={{ display: 'flex',  flexFlow: 'column wrap', padding: '2em'}}>
        { products.map(product => <Product key={ product._id } product={ product } />) }
      </div>
    </ViewTransition>
  )
}

function Product(props) {
  return (
    <ViewTransition>
      <div className='box' style={{ display: 'flex', flexDirection: 'column', flex: 1, width: '15rem', padding: '0em', overflow: 'hidden' }}>
        <img src={ props.product.cover } alt='Cover' />
        <div style={{ padding: '0.5rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <div style = {{ display: 'flex' }}>
            { props.product.title }
          </div>
          <div style={{ display: 'flex' }}>
            <div className='button is-link is-small' onClick={ () => console.log(props.product) }>
              Adquirir
            </div>
          </div>
        </div>
      </div>
    </ViewTransition>
  )
}