import { createContext } from 'react'  // Importa a função 'createContext' do React, usada para criar um contexto

export const SomeContext = createContext()  // Cria um contexto chamado 'SomeContext' que pode ser usado para compartilhar dados entre componentes

export const HookUseContext = ({ children }) => {  // Define o componente 'HookUseContext' que recebe 'children' como prop, representando os componentes filhos dentro dele
    const contextValue = "testing context"  // Define o valor do contexto, neste caso uma string "testing context"

    return (  // Retorna a estrutura JSX que envolverá os componentes filhos com o provedor do contexto
        <SomeContext.Provider value={{ contextValue }}>  {/*O 'SomeContext.Provider' permite que os componentes filhos acessem o valor do contexto. 'value' é o valor compartilhado */}
            {children}  {/*Renderiza os componentes filhos passados para o 'HookUseContext'*/}
        </SomeContext.Provider>  // Fecha o 'SomeContext.Provider', envolvendo os componentes filhos
    )
} 

//O createContext é uma função do React usada para criar um "Contexto". Um contexto no React é uma maneira de compartilhar dados entre componentes sem precisar passar explicitamente as props por cada nível da árvore de componentes. Ele é ideal para compartilhar informações globais, como dados do usuário autenticado, configurações ou temas, sem que cada componente precise receber essas informações por meio de props.

//O SomeContext.Provider é usado para envolver os componentes filhos e fornecer o valor do contexto, enquanto o useContext(SomeContext) seria utilizado em um componente filho para acessar esse valor.
