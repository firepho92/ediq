import React from 'react'
import RouterContext from '../context/RouterContext'
import HeritageProductsView from './HeritageProductsView'

export default function SubjectsView() {
  const { pushView } = React.useContext(RouterContext)

  return (
    <div style={ flexGrid }>
      <div className='grow' style={{ ...flexItem, backgroundColor: 'rgb(219,2,124)', color: 'white', fontSize: '1.5em' }} onClick={ () => { pushView(<HeritageProductsView />) } } >
        Biología
      </div>
      <div className='grow' style={{ ...flexItem, backgroundColor: 'rgb(247,179,49)', color: 'white', fontSize: '1.5em' }} onClick={ () => { pushView(<HeritageProductsView />) } } >
        Química
      </div>
      <div className='grow' style={{ ...flexItem, backgroundColor: 'rgb(231,83,27)', color: 'white', fontSize: '1.5em' }} onClick={ () => { pushView(<HeritageProductsView />) } } >
        TLR
      </div>
      <div className='grow' style={{ ...flexItem, backgroundColor: 'rgb(1,101,51)', color: 'white', fontSize: '1.5em' }} onClick={ () => { pushView(<HeritageProductsView />) } } >
        Historia
      </div>
      <div className='grow' style={{ ...flexItem, backgroundColor: 'rgb(102,37,130)', color: 'white', fontSize: '1.5em' }} onClick={ () => { pushView(<HeritageProductsView />) } } >
        Matemáticas
      </div>
    </div>
  )
}

const flexGrid = {
  height: '100vh',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '2rem',
  justifyContent: 'center'
}

const flexItem = {
  position: 'relative',
  margin: '1rem',
  display: 'flex',
  flexDirection: 'column',
  height: '10em',
	alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '5px',
  flexBasis: '15%',
  overflow: 'hidden',
  cursor: 'pointer'
}