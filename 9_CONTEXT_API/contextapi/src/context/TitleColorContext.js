import { createContext, useReducer } from "react" // Importa createContext e useReducer do React para criar um contexto e gerenciar o estado com reducer.

export const TitleColorContext = createContext() // Cria um contexto para compartilhar o estado da cor do título entre componentes.

export const TitleColorReducer = (state, action) => { // Define a função reducer que gerencia alterações no estado.
    switch(action.type){ // Verifica o tipo da ação recebida.
        case "RED": // Caso o tipo da ação seja "RED", altera a cor para vermelho.
            return {...state, color:"red"} // Retorna o estado atualizado com a cor definida como "red".
        case "BLUE": // Caso o tipo da ação seja "BLUE", altera a cor para azul.
            return {...state, color: "blue"} // Retorna o estado atualizado com a cor definida como "blue".
        default: // Caso nenhuma ação corresponda aos casos acima.
            return state // Retorna o estado atual sem alterações.
        }
}

export const TitleColorContextProvider = ({ children }) => { // Cria o componente provedor do contexto.

    const [state, dispatch] = useReducer(TitleColorReducer, { color: "purple" }) 
    // Usa o hook useReducer para gerenciar o estado inicial (cor inicial definida como "purple").

    console.log("Title color context:", state) // Exibe o estado atual no console para debug.

    return <TitleColorContext.Provider value ={{...state, dispatch}}> 
        {/* Prove o estado e a função dispatch para os componentes filhos via contexto */}
        {children}</TitleColorContext.Provider> 
        {/* Renderiza os componentes filhos dentro do provedor de contexto */}
}
