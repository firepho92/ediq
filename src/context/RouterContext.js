import React, { useState } from 'react'

const Router = React.createContext()

const { Provider, Consumer } = Router

function RouterProvider(props) {
  const [currentView, setCurrentView] = useState('Home')

  return (
    <Provider value={{ currentView, setCurrentView }}>
      { props.children }
    </Provider>
  )
}

export default Router
export { RouterProvider, Consumer as Router }