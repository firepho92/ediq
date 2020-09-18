import React from 'react'
import ViewTransition from '../animations/ViewTransition'

export default function NavigationHelper(props) {

  const [number, setNumber] = React.useState(props.pageIndex + 1)

  const handleKeyPress = (event) => {
    if(event.key === 'Enter') {
      if(number < 1) {
        setNumber(1)
        props.setPage(0)
      } else if(number > props.totalPages) {
        setNumber(props.totalPages)
        props.setPage(props.totalPages - 1)
      } else {
        setNumber(number)
        props.setPage(number - 1)
      }
    }
  }

  const handleNextButton = () => {
    setNumber(number + 1)
    props.nextPage()
  }

  const handleBeforeButton = () => {
    setNumber(number - 1)
    props.beforePage()
  }

  return (
    <ViewTransition>
      <div className='field has-addons'>
        <p className='control'>
          <button className='button' onClick={ handleBeforeButton } disabled={ props.pageIndex === 0 ? true : false }>
            <span className='icon is-small'>
              <i className='fas fa-chevron-left'></i>
            </span>
            <span>Atrás</span>
          </button>
        </p>
        <p className='control' style={{ width: '4em' }}>
          <input className='input' type='number' min={ 1 } max={ props.totalPages } value={ number } style={{ textAlign: 'center' }} onChange={ e => setNumber(e.target.value) } onKeyPress={ handleKeyPress }/>
        </p>
        <p className='control'>
          <button className='button' style={{ width: '4em', cursor: 'default' }}>
            <span>{ props.totalPages }</span>
          </button>
        </p>
        <p className='control'>
          <button className='button' onClick={ handleNextButton } disabled={ props.pageIndex + 1 === props.totalPages ? true : false }>
            <span className='icon is-small'>
              <i className='fas fa-chevron-right'></i>
            </span>
            <span>Siguiente</span>
          </button>
        </p>
      </div>
    </ViewTransition>
  )
}