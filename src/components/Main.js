import React from 'react'
import ViewTransition from '../animations/ViewTransition'
import Navbar from './NavBar'
import OwnedProducts from './OwnedProducts'
import Router from './Router'
import RouterContext from '../context/RouterContext'

function Main() {
  const { currentView, pushView } = React.useContext(RouterContext)
  React.useEffect(() => {
    if(!currentView) pushView(<OwnedProducts />)
  })
  return(
    <ViewTransition>
      <div className='has-navbar-fixed-top'>
      <Navbar />
      <Router />
    </div>
    </ViewTransition>
  )
}

export default Main