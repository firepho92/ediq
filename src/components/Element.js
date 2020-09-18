import React from 'react'
import ViewTransition from '../animations/ViewTransition'

export default function Element(props) {

  React.useEffect(() => {
    console.log(props.element)
  })

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
        parsedElement = <CompleteSentencesPick activity={ activity } />
        break
      case 'Complete sentences write':
        parsedElement = <CompleteSentencesWrite activity={ activity } />
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

const CompleteSentencesPick = (props) => {
  return (
    <div style={{ padding: '1em' }}>
      { props.activity.exercises.map((exercise, i) => <div key={ i } style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'space-between' }}>{ exercise.sentence }&nbsp;<div className='field has-addons'>{ exercise.options.map((option, i) => (
        <p key={ i } className='control'>
          <button className='button'>
            <span>{ option }</span>
          </button>
        </p>
      )) }</div></div>) }
    </div>
  )
}

const CompleteSentencesWrite = (props) => {
  return (
    <div style={{ padding: '1em' }}>
      { props.activity.exercises.map((exercise, i) => <div key={ i } style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>{ exercise.sentence }&nbsp;<div className='field has-addons'>
        <div className='field'>
          <p className='control'>
            <input className='input' type='text' style={{ width: '5em' }} />
          </p>
        </div>
      </div></div>) }
    </div>
  )
}