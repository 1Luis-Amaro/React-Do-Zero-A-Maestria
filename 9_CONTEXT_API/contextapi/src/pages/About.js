import React from 'react' 
// Importa o React para criar o componente funcional.

// import {useContext} from "react"
// import { CounterContext } from '../context/CounterContext'
// import ChangeCounter from '../components/ChangeCounter'
// Linhas comentadas porque a lógica foi refatorada para usar hooks personalizados.

import { useCounterContext } from '../hooks/useCounterContext' 
// Importa o hook personalizado que encapsula o contexto CounterContext.

import { useTitleColorContext } from '../hooks/useTitleColorContext' 
// Importa o hook personalizado que encapsula o contexto TitleColorContext.

const About = () => { 
  // Define o componente funcional About.

  // Substitui o uso direto de useContext pelo hook personalizado useCounterContext.
  const {counter} = useCounterContext() 
  // Obtém o valor do contador do contexto CounterContext.

  // Obtém apenas a cor do título a partir do contexto TitleColorContext.
  const {color} = useTitleColorContext() 

  return (
    <div>
      <h1 style={{color: color}} >About</h1> 
      {/* Exibe o título da página com a cor dinâmica obtida do contexto TitleColorContext. */}
      <p>Valor do contador {counter}</p> 
      {/* Exibe o valor do contador obtido do contexto CounterContext. */}
    </div>
  )
}

export default About 
// Exporta o componente About como padrão para que possa ser utilizado em outras partes do aplicativo.
