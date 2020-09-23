import React from 'react'
import RouterContext from '../context/RouterContext'
import ProductPresentation from '../components/ProductPresentation'

function Product(props) {
  const { pushView } = React.useContext(RouterContext)

  const handleClick = () => {
    pushView(<ProductPresentation product={ props.product } productIndex={ props.productIndex } />)
  }

  return(
    <div className='box grow' style={{ display: 'flex', flexDirection: 'column', flex: 1, maxWidth: '10rem', width: '10rem', padding: '0em', overflow: 'hidden', cursor: 'pointer', margin: '0 1em 0 1em' }} onClick={ handleClick }>
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