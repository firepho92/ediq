import React from 'react'

const ApplicationContext = React.createContext()

const { Provider, Consumer } = ApplicationContext

function ApplicationContextProvider(props) {
  const [warningModalIsOpen, setWarningModalIsOpen] = React.useState(false)

  return (
    <Provider value={{ warningModalIsOpen, setWarningModalIsOpen }}>
      { props.children }
    </Provider>
  )
}

export default ApplicationContext
export { ApplicationContextProvider, Consumer as ApplicationContext }