import React from 'react'
import RouterContext from '../context/RouterContext'
import ProductView from '../views/ProductView'
import ViewTransition from '../animations/ViewTransition'
import StylesContext from '../context/StylesContext'

export default function ProductPresentation(props) {
  const { pushView } = React.useContext(RouterContext)
  const { setBackgroundImage } = React.useContext(StylesContext)

  const handleClick = () => {
    setBackgroundImage(props.product.backgroundImage)
    pushView(<ProductView product={ props.product } productIndex={ props.productIndex } />)
  }

  return (
    <ViewTransition>
      <div className='columns is-desktop' style={{ marginTop: '3.25rem' }}>
        <div className='column is-6' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2em', height: '100%', flexDirection: 'column' }}>
          <div className='box' tyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1em', height: '100%', flexDirection: 'column' }}>
            <img src={ props.product.cover } alt='cover' width='300' />
            <p>
              Guía PROS. Sexto grado.
            </p>
          </div>
          <div className='button' onClick={ handleClick }>
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