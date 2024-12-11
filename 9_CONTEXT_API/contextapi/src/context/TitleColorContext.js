import { createContext, useReducer } from "react"

export const TitleColorContext = createContext()

export const TitleColorReducer = (state, action) => {
    //switch
}

export const TitleColorContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(TitleColorReducer, { color: "purple" })

    console.log("Title color context:", state)

    return <TitleColorContext.Provider value ={{...state}}>
        {children}</TitleColorContext.Provider>
}
