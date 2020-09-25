import React from 'react'
import primariaImg from '../assets/images/primaria.jpg'
import secundariaImg from '../assets/images/secundaria.jpg'
import preparatoriaImg from '../assets/images/preparatoria.jpg'
import ViewTransition from '../animations/ViewTransition'
import RouterContext from '../context/RouterContext'
import ProductsTypesView from './ProductsTypesView'

export default function LevelsView(props) {
  const { pushView } = React.useContext(RouterContext)

  return (
    <ViewTransition>
      <div style={ flexGrid }>
        <div className='grow shadow' style={ flexItem } onClick={ () => { pushView(<ProductsTypesView level={ 'primaria' } />) } } >
          <img style={{ maxWidth: '100%', maxHeight: '100%' }} alt='primaria' src={ primariaImg } />
          <div style={{ position: 'absolute', bottom: '0.5rem', right: '1rem', color: 'rgb(74, 74, 74)', fontWeight: 'bold' }}>
            Primaria
          </div>
        </div>
        <div className='grow shadow' style={ flexItem }>
          <img style={{ maxWidth: '100%', maxHeight: '100%' }} alt='secundaria' src={ secundariaImg } onClick={ () => { pushView(<ProductsTypesView level={ 'secundaria' } />) } } />
          <div style={{ position: 'absolute', bottom: '0.5rem', right: '1rem', color: 'rgb(74, 74, 74)', fontWeight: 'bold', fontFamily: 'Segoe UI' }}>
            Secundaria
          </div>
        </div>
        <div className='grow shadow' style={ flexItem }>
          <img style={{ maxWidth: '100%', maxHeight: '100%' }} alt='bachillerato' src={ preparatoriaImg } onClick={ () => { pushView(<ProductsTypesView level={ 'preparatoria' } />) } } />
          <div style={{ position: 'absolute', bottom: '0.5rem', right: '1rem', color: 'rgb(74, 74, 74)', fontWeight: 'bold', fontFamily: 'Segoe UI' }}>
            Bachillerato
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

// position: 'relative', display: 'flex', flexDirection: 'column', margin: '2rem',  maxHeight: '20rem', cursor: 'pointer' 