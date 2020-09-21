import React from 'react'

const Styles = React.createContext()

const { Provider, Consumer } = Styles

function StylesProvider(props) {
  const [backgroundImage, setBackgroundImage] = React.useState('')

  return (
    <Provider value={{ backgroundImage, setBackgroundImage }}>
      { props.children }
    </Provider>
  )
}

export default Styles
export { StylesProvider, Consumer as Styles }