import React from 'react'
import RouterContext from '../context/RouterContext'
import ViewTransition from '../animations/ViewTransition'
import NavigationHelper from '../components/NavigationHelper'
import ElementsView from '../views/ElementsView'

export default function ProductView(props) {
  const [pageIndex, setPageIndex] = React.useState(0)
  const { pushView } = React.useContext(RouterContext)

  const nextPage = () => {
    setPageIndex(pageIndex + 1)
  }

  const beforePage = () => {
    setPageIndex(pageIndex - 1)
  }

  return (
    <ViewTransition>
      <div className='columns is-desktop' style={{ padding: '1em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className='column' style={{ padding: '1em', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <NavigationHelper pageIndex={ pageIndex } totalPages={ props.payload.pages.length } nextPage={ nextPage } beforePage={ beforePage } setPage={ setPageIndex }/>
          <ElementsView page={ props.payload.pages[pageIndex] } />
        </div>
      </div>
    </ViewTransition>
  )
}