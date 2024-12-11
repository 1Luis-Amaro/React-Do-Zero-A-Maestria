import { useContext } from "react" // Importa o hook useContext do React para consumir o contexto.
import { TitleColorContext } from "../context/TitleColorContext" 
// Importa o contexto TitleColorContext, que foi criado anteriormente.

export const useTitleColorContext = () => { 
    // Define um hook personalizado para facilitar o uso do contexto TitleColorContext.

    const context = useContext(TitleColorContext) 
    // Usa o hook useContext para acessar o valor do contexto TitleColorContext.

    if(!context) { 
        // Verifica se o contexto não está disponível (possível caso não esteja dentro de um Provider).
        console.log("Context não encontrado!") 
        // Exibe uma mensagem no console avisando que o contexto não foi encontrado.
    }

    return context 
    // Retorna o contexto para ser usado no componente que chamou este hook.
}
