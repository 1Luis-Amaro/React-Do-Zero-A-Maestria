import {createContext,useReducer} from "react"

export const TitleColorContext = createContext()

export const TitleColorContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(TitleColorReducer, {color: "purple"}) 

    return <TitleColorContext.Provider>{children}</TitleColorContext.Provider>
}
