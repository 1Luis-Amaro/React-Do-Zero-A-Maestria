import { useState } from "react"; // Importa o hook 'useState' do React

const HookUseState = () => {
  // 1 - useState: Exemplo simples de uso de estado
  let userName = "João"; // Variável comum que não dispara re-renderizações

  const [name, setName] = useState("Matheus"); // Declara um estado chamado 'name' com valor inicial "Matheus"

  // Função para alterar a variável comum e o estado
  const changeNames = () => {
    userName = "João souza"; // Atualiza a variável comum (mas isso não reflete na interface)
    setName("Matheus Battisti"); // Atualiza o estado e dispara a re-renderização
  };

  // 2 - useState e input: Gerenciando estado com entrada de dados
  const [age, setAge] = useState(18); // Declara um estado chamado 'age' com valor inicial 18

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página
    console.log(age); // Simula o envio do dado (idade) para uma API
  };

  return (
    <div>
      {/** 1 - useState */}
      <h2>useState</h2> {/* Título principal */}
      <p>Variável: {userName} </p> {/* Exibe a variável comum */}
      <p>useState: {name} </p> {/* Exibe o valor do estado 'name' */}
      <button onClick={changeNames}>Mudar botão</button> {/* Botão para alterar a variável e o estado */}

      {/** 2 - useState e input */}
      <p>Digite a sua idade</p> {/* Orientação para o usuário */}
      <form onSubmit={handleSubmit}>
        <input
          type="text" // Campo de entrada de texto
          value={age} // Valor do input é controlado pelo estado 'age'
          onChange={(e) => setAge(e.target.value)} // Atualiza o estado 'age' ao digitar no input
        />
        <input type="submit" value="Enviar" /> {/* Botão de envio do formulário */}
      </form>
      <p>Você tem {age} anos! </p> {/* Exibe a idade informada */}
      <hr /> {/* Linha horizontal para separação */}
    </div>
  );
};

export default HookUseState; // Exporta o componente para uso em outros arquivos


//Explicação sobre o useState
//O hook useState permite:
//Criar e gerenciar estados locais dentro de um componente funcional.
//Atualizar valores de forma reativa, refletindo imediatamente na interface.
