import React from 'react'
import RouterContext from '../context/RouterContext'
import ProductPresentation from '../components/ProductPresentation'

function Product(props) {
  const { pushView } = React.useContext(RouterContext)

  const handleClick = () => {
    pushView(<ProductPresentation product={ props.product } productIndex={ props.productIndex } />)
  }

  return(
    <div className='box' style={{ display: 'flex', flexDirection: 'column', flex: 1, width: '10rem', padding: '0em', overflow: 'hidden', cursor: 'pointer' }} onClick={ handleClick }>
        <img src={ props.product.cover } alt='Cover' />
        <div style={{ padding: '0.5rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <div style = {{ display: 'flex' }}>
            { props.product.title }
          </div>
        </div>
      </div>
  )
}

export default Product