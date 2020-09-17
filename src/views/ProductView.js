import React from 'react'
import RouterContext from '../context/RouterContext'

function ProductView(props) {
  const { currentView } = React.useContext(RouterContext)
  return (
  <div onClick={() => console.log(currentView)}>ProductView{ currentView ? currentView.data : null }
  <div>
    {props.hola}
  </div>
  </div>
  )
}

export default ProductView