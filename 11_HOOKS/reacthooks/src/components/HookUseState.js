import { useState } from "react";

const HookUseState = () => {
  //1 - useState
  let userName = "João";

  const [name, setName] = useState("Matheus");

  const changeNames = () => {
    userName = "João souza";

    setName("Matheus Battisti");
  };

  // 2- useState e input
  const [age, setAge] = useState(18);


  const handleSubmit = (e) => {
    e.preventDefault()

    //envio a uma API
    console.log(age)
  }

  return (
    <div>
      {/**1 - useState */}
      <h2>useState</h2>
      <p>Váriavel: {userName} </p>
      <p>useState: {name} </p>
      <button onClick={changeNames}>Mudar botão</button>
      {/** 2 - useState e input*/}
      <p>Digite a sua idade</p>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} anos! </p>
    </div>
  );
};

export default HookUseState;
