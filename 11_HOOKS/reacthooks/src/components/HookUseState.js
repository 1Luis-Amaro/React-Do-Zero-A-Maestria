import {useState} from 'react'

const HookUseState = () => {
    //1 - useState
    let userName = "João"

    const [name, setName] = useState("Matheus")

    const changeNames = () => {
        userName = "João souza"

        setName("Matheus Battisti")
    }

  return (
    <div>
        {/**1 - useState */}
        <h2>useState</h2>
        <p>Váriavel: {userName} </p>
        <p>useState: {name} </p>
        <button onClick={changeNames}>Mudar botão</button>
    </div>
  )
}

export default HookUseState