import React from 'react'
import ViewTransition from '../animations/ViewTransition'
import UserContext from '../context/UserContext'

export default function ElementsView(props) {
  const { user, setUser } = React.useContext(UserContext)
  const [selectedAnswer, setSelectedAnswer] = React.useState(null)

  const saveAnswer = (answer) => {
    let userCopy = user
    userCopy.products[props.productIndex].pages[props.pageIndex].exercise.answer = answer
    setUser(userCopy)
    setSelectedAnswer(answer)
  }

  return (
    <ViewTransition>
      <div className='columns is-desktop'>
        <div className='box' style={{ margin: '2em', display: 'flex', flexDirection: 'column' }}>
          <div style={{ backgroundColor: 'rgb(42, 92, 167)', color: 'white', padding: '1em', borderRadius: '2px', textAlign: 'center' }}>
            { props.page.exercise.sentence }
          </div>
          <div style={{ marginTop: '2em' }}>
            <div className='field has-addons'>
              { props.page.exercise.options.map((option, index) => (
                <p key={ index } className='control'>
                  <button className={ selectedAnswer === option ? 'button is-info' : 'button' } onClick={ () => saveAnswer(option) }>
                    <span>{ option }</span>
                  </button>
                </p>
              )) }
            </div>
          </div>
        </div>
      </div>
    </ViewTransition>
  )
}

/*
{ props.page.elements.map((element, i) => <Element key={ i } element={ element } productIndex={ props.productIndex } pageIndex={ props.pageIndex } elementIndex={ i } />) }
*/
