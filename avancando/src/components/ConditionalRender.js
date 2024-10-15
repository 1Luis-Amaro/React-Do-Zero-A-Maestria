import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false )
    const [name, setName] = useState("jasdao")


  return (
    <div>
        <h1>Isso será exibido</h1>
        {x && <p>Se X for true, sim</p>}
        {!x && <p>agora X é falso</p>}
        <h1>If ternário</h1>
        {name === "jao" ? (
            <div>
                <p>O Nome é joão</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}
        <button onClick={()=> setName("jao")} > clique aqui para alterar o nome </button>
    </div>
  )
}

export default ConditionalRender