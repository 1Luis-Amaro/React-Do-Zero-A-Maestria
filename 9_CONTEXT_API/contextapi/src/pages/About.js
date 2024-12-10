import React from 'react'
//import {useContext} from "react"
//import { CounterContext } from '../context/CounterContext'
//import ChangeCounter from '../components/ChangeCounter'
import { useCounterContext } from '../hooks/useCounterContext'


const About = () => {
  //const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()
  return (
    <div>
      <h1>About</h1>
      <p>Valor do contador {counter}</p>
    </div>
  )
}

export default About