import ChangeCounter from '../components/ChangeCounter' 
// Importa o componente ChangeCounter que altera o valor do contador.

import './Home.css' 
// Importa o arquivo de estilos CSS para a página Home.

// 4 - Refatorando com hook personalizado
import { useCounterContext } from '../hooks/useCounterContext' 
// Importa o hook personalizado que encapsula o contexto CounterContext.

// 5 - Contexto mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext' 
// Importa o hook personalizado que encapsula o contexto TitleColorContext.

const Home = () => { 
  // Define o componente funcional Home.

  // Substitui o uso direto de useContext pelo hook personalizado useCounterContext.
  const {counter} = useCounterContext() 
  // Obtém o valor do contador a partir do contexto CounterContext.

  // 5 - Contexto mais complexo: utiliza o hook useTitleColorContext.
  const {color, dispatch} = useTitleColorContext() 
  // Obtém a cor atual do título e a função dispatch para alterar o estado no contexto TitleColorContext.

  // 6 - Alterando o contexto complexo: função para alterar a cor do título.
  const setTitleColor = (color) => { 
    dispatch({type: color}) 
    // Envia uma ação ao reducer para alterar a cor com base no tipo (RED ou BLUE).
  }

  return (
    <div>
      <h1 style={{color: color}}>Home</h1> 
      {/* Exibe o título com a cor definida no contexto TitleColorContext. */}
      <p>Valor do contador {counter}</p> 
      {/* Exibe o valor do contador obtido do contexto CounterContext. */}

      {/** 3 - Alterando valor do contexto: utiliza o componente ChangeCounter */}
      <ChangeCounter/> 
      {/* Componente que permite alterar o valor do contador no contexto CounterContext. */}

      {/* 6 - Alterando o contexto complexo: botões para alterar a cor do título. */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button> 
        {/* Botão para alterar a cor do título para vermelho enviando a ação "RED" ao reducer. */}
        <button onClick={() => setTitleColor("BLUE")}>Azul</button> 
        {/* Botão para alterar a cor do título para azul enviando a ação "BLUE" ao reducer. */}
      </div>
    </div>
  )
}

export default Home 
// Exporta o componente Home como padrão para que possa ser usado em outras partes do aplicativo.
