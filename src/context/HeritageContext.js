import React from 'react'

const HeritageContext = React.createContext()

const { Provider, Consumer } = HeritageContext

function HeritageProvider(props) {
  const [heritage, setHeritage] = React.useState()

  return (
    <Provider value={{ heritage, setHeritage }}>
      { props.children }
    </Provider>
  )
}

export default HeritageContext
export { HeritageProvider, Consumer as HeritageContext }