import React from 'react'
import ViewTransition from '../animations/ViewTransition'
import Product from './Product'
import UserContext from '../context/UserContext'

export default function OwnedProducts() {
  const { user } = React.useContext(UserContext)

  return (
    <ViewTransition>
      <div className='column is-2' style={{ paddingTop: '4.25rem' }}>
        <div className='field'>
          <p className='control has-icons-right'>
            <input className='input' type='text' placeholder='Buscar' required />
            <span className="icon is-small is-right">
              <i className="fas fa-search"></i>
            </span>
          </p>
        </div>
      </div>
      <div className='columns' style={{ display: 'flex',  flexFlow: 'column wrap', padding: '2em'}}>
        { user.products.map((product, i) => <Product key={ i } product={ product } productIndex={ i }/>) }
      </div>
    </ViewTransition>
  )
}