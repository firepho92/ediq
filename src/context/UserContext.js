import React from 'react'

const User = React.createContext()

const { Provider, Consumer } = User

function UserProvider(props) {
  const [user, setUser] = React.useState(0)
  
  return (
    <Provider value={{ user, setUser }}>
      { props.children }
    </Provider>
  )
}