import React from 'react'
import evaluacionesImg from '../assets/images/evaluaciones.jpg'
import ViewTransition from '../animations/ViewTransition'
import RouterContext from '../context/RouterContext'
import SubjectsView from './SubjectsView'

export default function ProductsTypesView(props) {
  const { pushView } = React.useContext(RouterContext)

  return (
    <ViewTransition>
      <div style={ flexGrid }>
        <div className='grow shadow' style={ flexItem } onClick={ () => pushView(<SubjectsView />) } >
          <img style={{ maxWidth: '100%', maxHeight: '100%' }} alt='evaluaciones' src={ evaluacionesImg } />
          <div style={{ position: 'absolute', bottom: '0.5rem', right: '1rem', color: 'rgb(74, 74, 74)', fontWeight: 'bold' }}>
            Evaluaciones
          </div>
        </div>
      </div>
    </ViewTransition>
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
  color: 'white',
  fontSize: '15px',
  position: 'relative',
  margin: '2rem',
  display: 'flex',
  flexDirection: 'column',
  height: '60%',
	alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '5px',
  overflow: 'hidden',
  cursor: 'pointer'
}