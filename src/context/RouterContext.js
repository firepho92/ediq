import React from 'react'
import SelectedProduct from '../components/SelectedProduct'

const Router = React.createContext()

const { Provider, Consumer } = Router

function RouterProvider(props) {
  const [currentView, setCurrentView] = React.useState(null)
  const [viewsHistory, setHistory] = React.useState([])

  const pushView = (payload) => {
    console.log(viewsHistory)
    viewsHistory.push(payload)
    setCurrentView(viewsHistory[viewsHistory.length - 1])
  }

  const popView = (payload) => {
    viewsHistory.pop()
    setCurrentView(viewsHistory[viewsHistory.length - 1])
  }

  return (
    <Provider value={{ currentView, setCurrentView, pushView, popView }}>
      { props.children }
    </Provider>
  )
}

export default Router
export { RouterProvider, Consumer as Router }