import React from 'react'
import RouterContext from '../context/RouterContext'
import ViewTransition from '../animations/ViewTransition'

function ProductView(props) {
  const { currentView } = React.useContext(RouterContext)
  const [page, setPage] = React.useState(0)

  return (
    <ViewTransition>
      <div>
        { props.payload.title }
      </div>
    </ViewTransition>
  )
}

export default ProductView