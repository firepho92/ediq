import React from 'react'

const UserContext = React.createContext()

const { Provider, Consumer } = UserContext

function UserProvider(props) {
  const [user, setUser] = React.useState(userDummy)

  return (
    <Provider value={{ user, setUser }}>
      { props.children }
    </Provider>
  )
}

export default UserContext
export { UserProvider, Consumer as UserContext }

const userDummy = {
  username: 'firepho',
  name: 'Alex Aguilar',
  email: 'auza920205@gmail.com',
  tutorEmail: 'jano-2709@hotmail.com',
  products: [
    {
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
              text: 'Escribe con letras los siguientes números.'
            },
            {
              type: 'Text',
              text: '34,512 = treinta y cuatro mi quinientos doce'
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
                  sentence: '2/5 + 3/4',
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