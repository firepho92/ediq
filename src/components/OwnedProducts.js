import React from 'react'
import ViewTransition from '../animations/ViewTransition'
import ProductsWrapper from './ProductsWrapper'
import Product from './Product'
import UserContext from '../context/UserContext'

function OwnedProducts() {
  const { user } = React.useContext(UserContext)

  React.useEffect(() => {
    console.log(user.products)
  })

  return (
    <ViewTransition>
      <div className='column is-2'>
        <div className='field'>
          <p className='control has-icons-right'>
            <input className='input' type='text' placeholder='Buscar' required />
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
      </div>
      <ProductsWrapper>
        { user.products.map((product, i) => <Product key={ i } payload={ product } />) }
      </ProductsWrapper>
    </ViewTransition>
  )
}

export default OwnedProducts