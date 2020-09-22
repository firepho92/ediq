import React from 'react'

export default function ProductsFilter(props) {

  const [isOpen, setIsOpen] = React.useState()
  const [selectedSubject, setSelectedSubject] = React.useState('')
  const [subjects] = React.useState(['Biología', 'Matemáticas'])

  const handleSelection = (e, subject) => {
    e.preventDefault()
    setSelectedSubject(subject)
    setIsOpen(!isOpen)
    props.handleFilter(subject)
  }

  return (
    <div className={ isOpen ? 'dropdown is-active' : 'dropdown' }>
      <div className='dropdown-trigger' onClick={ () => setIsOpen(!isOpen) }>
        <button className='button' aria-haspopup='true' aria-controls='dropdown-menu'>
          <span>Materia</span>
          <span className='icon is-small'>
            <i className='fas fa-angle-down' aria-hidden='true'></i>
          </span>
        </button>
      </div>
      <div className='dropdown-menu' id='dropdown-menu' role='menu'>
        <div className='dropdown-content'>
          <a href='#'className={ selectedSubject === '' ? 'dropdown-item is-active' : 'dropdown-item' } style={{ cursor: 'pointer' }} onClick={ (e) => handleSelection(e, '') }>
            { 'Limpiar selección' }
          </a>
          { subjects.map(subject => (
            <a href='#' key={ subject } className={ selectedSubject === subject ? 'dropdown-item is-active' : 'dropdown-item' } style={{ cursor: 'pointer' }} onClick={ (e) => handleSelection(e, subject) }>
              { subject }
            </a>
          )) }
        </div>
      </div>
    </div>
  )
}