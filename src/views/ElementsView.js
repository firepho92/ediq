import React from 'react'
import ViewTransition from '../animations/ViewTransition'
import Element from '../components/Element'

export default function ElementsView(props) {

  return (
    <div className='box' style={{ margin: '2em' }}>
      { props.page.elements.map((element, i) => <Element key={ i } element={ element } />) }
    </div>
  )
}