import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/images/index.jpeg'
import UserContext from '../context/UserContext'
import RouterContext from '../context/RouterContext'
import OwnedProducts from './OwnedProducts'
import HeritageView from '../views/HeritageView'
import EducationalSupportCourseView from '../views/EducationalSupportCourseView'

function Navbar() {
  const { pushView } = React.useContext(RouterContext)
  const { user } = React.useContext(UserContext)
  const [selectedItem, setSelectedItem] = React.useState('Apoyo educativo')

  const handleClick = (view, item) => {
    setSelectedItem(item)
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
          <div className='navbar-item' style={{ ...pointer, fontWeight: selectedItem === 'Apoyo educativo' ? 'bold' : 'normal' }} onClick={ () => handleClick(<EducationalSupportCourseView />, 'Apoyo educativo') }>
            Apoyo educativo
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