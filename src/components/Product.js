import React from 'react'
import RouterContext from '../context/RouterContext'
import ProductView from '../views/ProductView'

function Product(props) {
  const { pushView } = React.useContext(RouterContext)

  const handleClick = () => {
    pushView(<ProductView hola={'hola'} />)
  }

  return(
    <div className='column is-3'>
      <div className='card' style={{ cursor: 'pointer', borderRadius: '3px', overflow: 'hidden' }} onClick={handleClick}>
        <div className='card-image'>
          <figure className='image is-4by3'>
            <img src='https://bulma.io/images/placeholders/1280x960.png' alt='a' />
          </figure>
        </div>
        <div className='card-content'>
          <div className='content'>
            asdasda
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product