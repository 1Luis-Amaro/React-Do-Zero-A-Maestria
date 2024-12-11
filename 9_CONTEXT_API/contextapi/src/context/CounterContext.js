// 1 - Criar context
import {createContext, useState} from "react" 
// Importa a função createContext para criar o contexto e useState para gerenciar o estado interno.

export const CounterContext = createContext() 
// Cria o contexto CounterContext. Esse contexto será usado para compartilhar o estado do contador.


// 2 - Criar provider
export const CounterContextProvider = ({children}) => { 
    // Define o componente provider que envolverá os componentes que precisam acessar o contexto.
    // O "children" refere-se a qualquer componente filho que será envolvido por esse provider.

    const [counter, setCounter] = useState(5) 
    // Cria um estado interno chamado "counter" inicializado com 5 e uma função "setCounter" para atualizá-lo.

    return (
        <CounterContext.Provider value={{counter, setCounter}}> 
            {/* O componente Provider do contexto compartilha o estado "counter" e a função "setCounter" com os filhos. */}
            {children} 
            {/* Renderiza os componentes filhos passados ao provider. */}
        </CounterContext.Provider>
    )
}
