import React from 'react'
import UserContext from '../context/UserContext'
import ViewTransition from '../animations/ViewTransition'
import logo from '../assets/images/index.jpeg'

function LoginView() {
  const { setUser } = React.useContext(UserContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    setUser({ username: 'firepho', name: 'Alex Aguilar' })
  }

  return(
    <ViewTransition>
      <div className='columns is-desktop' style={{ height: '100vh' }}>
        <div className='column is-one-third' style={ center }>
          <form onSubmit={ handleSubmit }>
            
            <div className='field'>
              <label className='label'>Nombre de usuario</label>
              <input className='input' type='text' placeholder='Ej. Alex' required />
            </div>
            <div className='field'>
              <label className='label'>Nombre de usuario</label>
              <input className='input' type='password' required />
            </div>
            <div className='control'>
              <input className='button is-link' type='submit' value='Entrar' />
            </div>
          </form>
        </div>
        <div className='column is-two-thirds' style={{ ...center, backgroundColor: '#fff' }}>
          <img src={logo} height='200' width='200'alt='ediQ'/>
        </div>
      </div>
    </ViewTransition>
  )
}

export default LoginView

const center = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}