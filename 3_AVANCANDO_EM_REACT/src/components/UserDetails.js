import React from 'react'

const UserDetails = () => {
    const users = [
        {id: 1, name: "Luizao", idade: 20, profissão:"TI"},
        {id: 2,name: "janaiana", idade: 10, profissão:"marketing"},
        {id: 3,name: "jenifer", idade: 18, profissão:"vendedora"}
]
    return (
    <div >
         <ul>
                {users.map((user)=>(
                    <li key={user.id}> 
                    Nome: {user.name} - Idade: {user.idade} - Profissão: {user.profissão }
                    { user.idade >= 18 ? ( "Voce pode tirar carteira de trabalho") : "você não pode tirar carteira de trabalho"}
                     </li>
                     
                ))}
            </ul>
    </div>
  )
}

export default UserDetails