import React from 'react'
import UserContext from '../context/UserContext'
import ViewTransition from '../animations/ViewTransition'
import logo from '../assets/images/index.jpeg'
import { auth, getUser } from '../api/UserAPI'

function LoginView() {
  const { setUser, setToken } = React.useContext(UserContext)
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const authenticationData = await auth({ user: { username: username, password: password }})
      const user = await getUser(authenticationData.data.id)
      setToken(authenticationData.data.token)
      setUser(user.data)
    } catch(e) {
      console.log(e)
    }
  }

  return(
    <ViewTransition>
      <div className='' style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ ...center, flex: 1 }}>
          <form onSubmit={ handleSubmit }>
            
            <div className='field'>
              <label className='label'>Nombre de usuario</label>
              <input className='input' type='text' placeholder='Ej. Alex' required onChange={ (e) => setUsername(e.target.value) } value= { username } />
            </div>
            <div className='field'>
              <label className='label'>Nombre de usuario</label>
              <input className='input' type='password' required onChange={ (e) => setPassword(e.target.value) } value={ password } />
            </div>
            <div className='control'>
              <input className='button is-link' type='submit' value='Entrar' />
            </div>
          </form>
        </div>
        <div style={{ ...center, backgroundColor: '#fff', flex: 2 }}>
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