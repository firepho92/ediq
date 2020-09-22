import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/images/index.jpeg'
import UserContext from '../context/UserContext'
import RouterContext from '../context/RouterContext'
import OwnedProducts from './OwnedProducts'
import Heritage from './Heritage'
import HeritageView from '../views/HeritageView'

function Navbar() {
  const { pushView } = React.useContext(RouterContext)
  const { user } = React.useContext(UserContext)

  const handleClick = (view) => {
    pushView(view)
  }

  return (
    <nav className='navbar is-transparent is-fixed-top' style={ navbar }>
      <div className='navbar-brand'>
        <img src={ logo } width='50' alt='ediQ' />
        <div className='navbar-burger burger' data-target='navbar'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id='navbar' className='navbar-menu'>
        <div className='navbar-start'>
          <div className='navbar-item' style={ pointer } onClick={ () => handleClick(<HeritageView />) }>
            Acervo
          </div>
          <div className='navbar-item' style={ pointer } onClick={ () => handleClick(<OwnedProducts />) }>
            Comprados
          </div>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item' style={ pointer }>
            <FontAwesomeIcon icon={ faUser } />
          </div>
          <div className='navbar-item' style={ pointer }>
            { user.name }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

const pointer = {
  cursor: 'pointer'
}

const navbar = {
  padding: '0 1em 0 1em',
  backgroundColor: 'rgba(255, 255, 255, 100)'
}