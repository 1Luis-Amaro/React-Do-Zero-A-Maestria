import './MyForm.css'
import {useState} from 'react'

const MyForm = ({user}) => {
    //6 - controled inputs

    //3- gerenciamento de dados 
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')

    const [bio, setBio] = useState(user ? user.bio : '')

    const [role, setRole] = useState(user ? user.role : '')

    const handleName = (e) => {
        setName(e.target.value)
    }

    //console.log(name)
    //console.log(email)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("enviando formulario")
        console.log(name, email,bio, role)

         //7 limpar formulario
    setName("")
    setEmail("")
    }

   
  return (
    <div>
        {/**5- envio de form */}
        {/**1 - Criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                
                <input type="text" name='name' placeholder='Digite o seu nome' onChange={handleName} value={name} />
            </div>
            {/** 2 - Label envolvendo input */}
           <label>
            <span>E-mail</span>
            {/**simplificacao de manipulacoa de state */}
            <input type="email" name='email' placeholder='Digite seu e-mail' onChange={(e)=> setEmail(e.target.value)} value={email} />
           </label>
            {/**8 - textarea */}
            <label>
                <span>Bio:</span>
            
            <textarea name="bio" placeholder='descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>

        <label>
            <span>Função do sistema</span>
            <select name="role" onChange={(e)=> setRole(e.target.value)} value={role}>
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
            </select>
        </label>

            <input type="submit" name="Enviar"  />

        </form>
    </div>
  )
}

export default MyForm