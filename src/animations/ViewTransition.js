import React from 'react'
import { motion } from 'framer-motion'

const ViewTransitionProps = {
  atEnter: {
    opacity: 0
  },
  atLeave: {
    opacity: 0,
  },
  atActive: {
    opacity: 1
  },
  duration: 0.250
}

function ViewTransition(props) {
  return (
    <motion.div
      key = 'ViewTransition'
      initial = { ViewTransitionProps.atEnter }
      animate = { ViewTransitionProps.atActive }
      exit = { ViewTransitionProps.atLeave }
      transition = {{ duration: ViewTransitionProps.duration, delay: props.delay ?? 0 }}
    >
      { props.children }
    </motion.div>
  )
}

export default ViewTransition