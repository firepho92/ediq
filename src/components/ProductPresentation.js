import React from 'react'
import RouterContext from '../context/RouterContext'
import ProductView from '../views/ProductView'
import ViewTransition from '../animations/ViewTransition'

export default function ProductPresentation(props) {
  const { pushView } = React.useContext(RouterContext)

  return (
    <ViewTransition>
      <div className='columns is-desktop'>
        <div className='column is-6' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2em', height: '100%', flexDirection: 'column' }}>
          <div className='box' tyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1em', height: '100%', flexDirection: 'column' }}>
            <img src={ props.payload.cover } alt='cover' width='300' />
            <p>
              Guía PROS. Sexto grado.
            </p>
          </div>
          <div className='button' onClick={ () => pushView(<ProductView payload={ props.payload } />) }>
            Iniciar
          </div>
        </div>
        <div className='column is-6' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2em', height: '100%' }}>
          <div className='box'>
            <p>
              Editorial  SEEMARGS,  presenta  su  nueva  edición  de  la  Guía  de  Preparación  para  Resultados  Óptimos  en  Secundaria  (PROS),  elaborada  por  docentes  experimentados  y  conocedores  de  las  asignaturas  que  se  imparten  a  nivel  primaria.  La  Guía  PROS  simplifica de manera precisa, los conocimientos esenciales que el alumno de sexto grado de primaria debe conocer y dominar al ingresar a Secundaria, lo que la convierte en un recurso pedagógico de excelencia con reconocida efectividad, para que el adolescente tenga un inicio exitoso en la secundaria y se encuentre preparado para enfrentarse a los nuevos retos en su camino.
            </p>
          </div>
        </div>
      </div>
    </ViewTransition>
  )
}