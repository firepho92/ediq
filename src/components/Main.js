import React from 'react'
import ViewTransition from '../animations/ViewTransition'
import Navbar from './NavBar'
import OwnedProducts from './OwnedProducts'
import HeritageView from '../views/HeritageView'
import EducationalSupportCourseView from '../views/EducationalSupportCourseView'
import Router from './Router'
import RouterContext from '../context/RouterContext'
import StylesContext from '../context/StylesContext'

function Main() {
  const { currentView, pushView } = React.useContext(RouterContext)
  const { backgroundImage } = React.useContext(StylesContext)


  React.useEffect(() => {
    if(!currentView) pushView(<EducationalSupportCourseView />)
  })
  return(
    <div style={{ backgroundImage: 'url(' + backgroundImage + ')', height: '100vh', backgroundSize: 'cover' }}>
      <ViewTransition>
        <Navbar />
        <Router />
      </ViewTransition>
    </div>
  )
}

export default Main