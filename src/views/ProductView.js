import React from 'react'
import RouterContext from '../context/RouterContext'
import ApplicationContext from '../context/ApplicationContext'
import UserContext from '../context/UserContext'
import StylesContext from '../context/StylesContext'
import ViewTransition from '../animations/ViewTransition'
import NavigationHelper from '../components/NavigationHelper'
import EvaluationView from './EvaluationView'
import ReactModal from 'react-modal'
import ProductPresentation from '../components/ProductPresentation'

export default function ProductView(props) {
  const [pageIndex, setPageIndex] = React.useState(0)
  const { pushView } = React.useContext(RouterContext)
  const { warningModalIsOpen, setWarningModalIsOpen } = React.useContext(ApplicationContext)
  const { user, setUser } = React.useContext(UserContext)
  const { setBackgroundImage } = React.useContext(StylesContext)

  const nextPage = () => {
    setPageIndex(pageIndex + 1)
  }

  const beforePage = () => {
    setPageIndex(pageIndex - 1)
  }

  const handleEvaluationExit = () => {
    const product = { ...props.product, status: 'finished' }
    let userCopy = user
    userCopy.products[props.productIndex] = product
    setUser(userCopy)
    setWarningModalIsOpen(false)
    setBackgroundImage('')
    pushView(<ProductPresentation product={ user.products[props.productIndex] } />)
  }

  return (
    <ViewTransition>
        <ReactModal isOpen={ warningModalIsOpen } contentLabel='Minimal Modal Example' style={{ overlay: { zIndex: 31, backgroundColor: 'rgba(0, 0, 0, 0.75)' } }}>
          <button onClick={ handleEvaluationExit }>Close Modal</button>
        </ReactModal>
      <div className='columns is-desktop' style={{ padding: '1em', display: 'flex', flexDirection: 'column', paddingTop: '4.25rem' }}>
        <div className='column' style={{ padding: '1em', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <NavigationHelper pageIndex={ pageIndex } totalPages={ props.product.pages.length } nextPage={ nextPage } beforePage={ beforePage } setPage={ setPageIndex }/>
        </div>
        <EvaluationView page={ props.product.pages[pageIndex] } pageIndex={ pageIndex } productIndex={ props.productIndex } />
      </div>
    </ViewTransition>
  )
}

/*
<ElementsView page={ props.product.pages[pageIndex] } productIndex={ props.productIndex } pageIndex={ pageIndex } />
*/