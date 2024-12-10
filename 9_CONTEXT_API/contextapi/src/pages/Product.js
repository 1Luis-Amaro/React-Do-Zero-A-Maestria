import './Product.css'
import React from 'react'
//import {useContext} from "react"
//import { CounterContext } from '../context/CounterContext'
//import ChangeCounter from '../components/ChangeCounter'
import { useCounterContext } from '../hooks/useCounterContext'


const Product = () => {
 // const {counter} = useContext(CounterContext)
  const {counter } = useCounterContext ()
    return (
    <div>
      <h1>Product</h1>
      <p>Valor de contador {counter}</p>
    </div>
    )
}


export default Product