import React from 'react'
import UserContext from '../context/UserContext'

export default function Element(props) {

  const { user, setUser } = React.useContext(UserContext)
  const [currentElement, setCurrentElement] = React.useState()

  const saveAnswer = (exerciseIndex, answer) => {
    let userCopy = user
    userCopy.products[props.productIndex].pages[props.pageIndex].elements[props.elementIndex].exercises[exerciseIndex].answer = answer
    setUser(userCopy)
    console.log(props.productIndex + ' ' + props.pageIndex + ' ' + props.elementIndex + ' ' + exerciseIndex)
    console.log(userCopy)
  }

  const elementParser = (element) => {
    let parsedElement
    switch (element.type) {
      case 'Text':
        parsedElement = <Text text={ element.text } />
        break
      case 'Activity':
        parsedElement = activityParser(element)
        break
      default:
        parsedElement = 'Error'
        break
    }
    return parsedElement
  }

  const activityParser = (activity) => {
    let parsedElement
    switch (activity.subtype) {
      case 'Complete sentences pick':
        parsedElement = <CompleteSentencesPick activity={ activity } saveAnswer={ saveAnswer } />
        break
      case 'Complete sentences write':
        parsedElement = <CompleteSentencesWrite activity={ activity } saveAnswer={ saveAnswer } />
        break
      default:
        parsedElement = activity.subtype
        break
    }
    return parsedElement
  }

  return (
    <div>{ elementParser(props.element) }</div>
  )
}

const Text = (props) => {
  return (
    <div style={{ backgroundColor: 'rgb(42, 92, 167)', color: 'white', padding: '1em', borderRadius: '2px' }}>
      { props.text }
    </div>
  )
}

function CompleteSentencesPick(props) {
  const [selectedButton, setSelectedButton] = React.useState(null)

  const handleButton = (index, option) => {
    props.saveAnswer(index, option)
    setSelectedButton(option)
  }

  return (
    <div style={{ padding: '1em' }}>
      { props.activity.exercises.map((exercise, index) => <div key={ index } style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'space-between' }}>{ exercise.sentence }&nbsp;<div className='field has-addons'>{ exercise.options.map((option, i) => (
        <p key={ i } className='control'>
          <button className={exercise.answer === option ? 'button is-info' : 'button'} onClick={ () => handleButton(index, option) }>
            <span>{ option }</span>
          </button>
        </p>
      )) }</div></div>) }
    </div>
  )
}

const CompleteSentencesWrite = (props) => {
  const [inputs, setInputs] = React.useState({})

  const handleChangeForField = fieldName => ({target}) => setInputs(state => {
    console.log(fieldName)
    return ({...state,[fieldName]:target.value})
  })
  
  return (
    <div style={{ padding: '1em' }}>
      { props.activity.exercises.map((exercise, index) => <div key={ index } style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>{ exercise.sentence }&nbsp;<div className='field has-addons'>
        <div className='field'>
          <p className='control'>
            <input className='input' type='text' style={{ width: (exercise.rightAnswer.length + 2) + 'em' }} onChange={ handleChangeForField(index) } value={ inputs[index] } name={index}/>
          </p>
        </div>
      </div></div>) }
    </div>
  )
}