import ChangeCounter from '../components/ChangeCounter'
//import {CounterContext} from '../context/CounterContext'
import './Home.css'
//import {useContext} from "react"

//4 - refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext'

const Home = () => {
  //const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()
  return (
    
    <div>
      <h1>Home</h1>
      <p>Valor do contador {counter}</p>
      {/** 3 - alterando valor contexto */}
      <ChangeCounter/>
    </div>
  )
}

export default Home