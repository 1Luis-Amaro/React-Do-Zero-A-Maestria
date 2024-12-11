import {useContext} from "react" 
// Importa o hook `useContext` do React, usado para consumir o contexto.

import { CounterContext } from "../context/CounterContext" 
// Importa o contexto `CounterContext`, criado anteriormente, para ser consumido neste hook.

export const useCounterContext = () => { 
    // Cria um hook personalizado chamado `useCounterContext` para encapsular o acesso ao contexto.

    const context = useContext(CounterContext) 
    // Usa o hook `useContext` para acessar o valor do contexto `CounterContext`.

    if(!context){ 
        // Verifica se o contexto não foi encontrado. Isso pode ocorrer se o componente que usa este hook 
        // não estiver dentro de um `CounterContextProvider`.
        console.log("Contexto não encontrado ") 
        // Exibe uma mensagem de erro no console caso o contexto não esteja disponível.
    }

    return context  
    // Retorna o valor do contexto para o componente que usar este hook.
}
