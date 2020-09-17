import React from 'react'
import RouterContext from '../context/RouterContext'

function Router() {
  const { currentView } = React.useContext(RouterContext)

  return(
    <div>
      { currentView }
    </div>
  )
}

export default Router