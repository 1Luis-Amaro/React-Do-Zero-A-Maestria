import {useContext, createContext} from 'react' // Importa os hooks `useContext` e `createContext` da biblioteca React

const AuthContext = createContext() // Cria um contexto chamado `AuthContext`, que será usado para gerenciar e compartilhar dados globalmente

export function AuthProvider({children, value}) { // Define um componente chamado `AuthProvider` que aceita `children` e `value` como props
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider> // Retorna um provedor de contexto, compartilhando o `value` com os componentes filhos
}

export function useAuthValue() { // Define um hook personalizado chamado `useAuthValue` para acessar o contexto
    return useContext(AuthContext) // Usa o hook `useContext` para obter o valor atual de `AuthContext`
}
 