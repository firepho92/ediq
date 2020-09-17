import React from 'react'

function ProductsWrapper(props) {
  return (
    <div style={ wrapperStyle }>
      <div className='columns is-desktop'>
        { props.children }
      </div>
    </div>
  )
}

export default ProductsWrapper

const wrapperStyle = {
  padding: '1em'
}