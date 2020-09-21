import React from 'react'
import UserContext from '../context/UserContext'
import ViewTransition from '../animations/ViewTransition'
import logo from '../assets/images/index.jpeg'

function LoginView() {
  const { setUser } = React.useContext(UserContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    setUser(userDummy)
  }

  return(
    <ViewTransition>
      <div className='' style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ ...center, flex: 1 }}>
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

const userDummy = {
  username: 'firepho',
  name: 'Alex Aguilar',
  email: 'auza920205@gmail.com',
  tutorEmail: 'jano-2709@hotmail.com',
  products: [
    {
      _id: 0,
      title: 'Guía PROS',
      cover: 'http://localhost:8500/images/guiapros.png',
      pages: [
        {
          number: 1,
          favorite: false,
          seen: false,
          elements: [
            {
              type: 'Text',
              text: 'Elige la palabra adecuada y completa.'
            },
            {
              type: 'Activity',
              subtype: 'Complete sentences pick',
              exercises: [
                {
                  sentence: '_____ no termino mi tarea',
                  options: ['aún', 'aun'],
                  rightAnswer: 'aún',
                  answer: null
                },
                {
                  sentence: 'Ojalá que _____ aceptes',
                  options: ['tú', 'tu'],
                  rightAnswer: 'tú',
                  answer: null
                },
                {
                  sentence: '_____ mamá me compró esta muñeca',
                  options: ['mí', 'mi'],
                  rightAnswer: 'mi',
                  answer: null
                },
                {
                  sentence: 'María leyó en voz alta un cuento para _____',
                  options: ['sí', 'si'],
                  rightAnswer: 'sí',
                  answer: null
                },
                {
                  sentence: 'El libro es _____ Luis',
                  options: ['dé', 'de'],
                  rightAnswer: 'de',
                  answer: null
                }
              ]
            },
            {
              type: 'Text',
              text: 'Distingue entre mí(pronombre) y mi (determinante posesivo).'
            },
            {
              type: 'Activity',
              subtype: 'Complete sentences write',
              exercises: [
                {
                  sentence: 'Lo quiero para _____.',
                  rightAnswer: 'mí',
                  answer: null
                },
                {
                  sentence: 'A _____ no me ha gustado.',
                  rightAnswer: 'mí',
                  answer: null
                },
                {
                  sentence: 'Éste es _____ hermano.',
                  rightAnswer: 'mi',
                  answer: null
                },
                {
                  sentence: 'En _____ opinión esto no está bien.',
                  rightAnswer: 'mi',
                  answer: null
                },
                {
                  sentence: 'A _____ hermana le llamó la atención.',
                  rightAnswer: 'Mi',
                  answer: null
                },
                {
                  sentence: 'A _____ me parece interesante la historia.',
                  rightAnswer: 'mí',
                  answer: null
                },
              ]
            }
          ]
        },
        {
          number: 2,
          favorite: false,
          seend: false,
          elements: [
            {
              type: 'Text',
              text: `Escribe con letras los siguientes números. \r\n Ejemplo: 34,512 = treinta y cuatro mi quinientos doce`
            },
            {
              type: 'Activity',
              subtype: 'Complete sentences write',
              exercises: [
                {
                  sentence: '2 = ',
                  rightAnswer: 'Dos',
                  answer: null
                },
                {
                  sentence: '34 = ',
                  rightAnswer: 'Treinta y cuatro',
                  answer: null
                },
                {
                  sentence: '207 = ',
                  rightAnswer: 'Doscientos siete',
                  answer: null
                }
              ]
            }
          ]
        },
        {
          number: 3,
          favorite: false,
          seen: false,
          elements: [
            {
              type: 'Text',
              text: 'Resuelve las siguientes sumas de fracciones comunes.'
            },
            {
              type: 'Activity',
              subtype: 'Complete sentences write',
              exercises: [
                {
                  sentence: '2/5 + 3/4 = ',
                  rightAnswer: '',
                  answer: null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}