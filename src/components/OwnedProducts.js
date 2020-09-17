import React from 'react'
import ViewTransition from '../animations/ViewTransition'
import ProductsWrapper from './ProductsWrapper'
import Product from './Product'

function OwnedProducts() {
  return (
    <ViewTransition>
      <ProductsWrapper>
        <Product data={{id: 1, name: 'a'}} />
        <Product data={{id: 1, name: 'a'}} />
        <Product data={{id: 1, name: 'a'}} />
        <Product data={{id: 1, name: 'a'}} />
      </ProductsWrapper>
    </ViewTransition>
  )
}

export default OwnedProducts