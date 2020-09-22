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
      _id: 0,
      title: 'Guía PROS',
      cover: 'http://localhost:8500/images/guiapros.png',
      backgroundImage: 'http://localhost:8500/images/Matemáticas_I.jpg',
      type: 'evaluation',
      pages: [
        {
          number: 1,
          exercise: {
            sentence: '1. Nombre de las partes que conforman una fracción',
            rightAnswer: 'c) Numerador y denominador',
            answer: null,
            options: [
              'a) Arriba y abajo',
              'b) Uno y dos',
              'c) Numerador y denominador',
              'd) Primero y segundo'
            ]
          }
        },
        {
          number: 2,
          exercise: {
            sentence: '2. ¿Cuántos metros tiene un kilómetro?',
            rightAnswer: 'd) 1000',
            answer: null,
            options: [
              'a) 100',
              'b) 454',
              'c) 600',
              'd) 1000'
            ]
          }
        },
        {
          number: 3,
          exercise: {
            sentence: 'Es la suma de los lados de cualquier figura',
            rightAnswer: 'b) Perímetro',
            answer: null,
            options: [
              'a) Área',
              'b) Perímetro',
              'c) Superficie',
              'd) Volúmen'
            ]
          }
        }
      ],
      price: 0,
      level: 'Primaria',//primaria, secundaria, bachillerato
      grade: '',//
      subject: '',//Biología etc
      trimester: '',
      baseColor: '#ff0000'
    }
  ]
}
/*
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
*/