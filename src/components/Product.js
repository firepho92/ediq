import React from 'react'
import RouterContext from '../context/RouterContext'
import ProductPresentation from '../components/ProductPresentation'

function Product(props) {
  const { pushView } = React.useContext(RouterContext)

  const handleClick = () => {
    pushView(<ProductPresentation payload={ props.payload } />)
  }

  return(
    <div className='column is-3'>
      <div className='card' style={{ cursor: 'pointer', borderRadius: '3px', overflow: 'hidden' }} onClick={handleClick}>
        <div className='card-image'>
          <figure className='image is-4by3'>
            <img src={ props.payload.cover } alt='a' width='200' />
          </figure>
        </div>
        <div className='card-content'>
          <div className='content'>
            { props.payload.title }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product