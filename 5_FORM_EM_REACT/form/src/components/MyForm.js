import './MyForm.css'
import {useState} from 'react'

const MyForm = () => {
    //3- gerenciamento de dados 
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value)
    }

    console.log(name)
    console.log(email)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("enviando formulario")
    }

  return (
    <div>
        {/**5- envio de form */}
        {/**1 - Criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder='Digite o seu nome' onChange={handleName} />
            </div>
            {/** 2 - Label envolvendo input */}
           <label>
            <span>E-mail</span>
            {/**simplificacao de manipulacoa de state */}
            <input type="email" name='email' placeholder='Digite seu e-mail' onChange={(e)=> setEmail(e.target.value)}/>
           </label>
            <input type="submit" name="Enviar"  />

        </form>
    </div>
  )
}

export default MyForm