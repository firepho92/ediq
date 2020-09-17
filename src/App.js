import React from 'react'
import UserContext from './context/UserContext'
import LoginView from './views/LoginView'
import Main from './components/Main'
import 'bulma/css/bulma.css'
import './App.css'

function App() {
  const { user } = React.useContext(UserContext)
  return (
    <div>
      { user ? <Main /> : <LoginView /> }
    </div>
  )
}

export default App
