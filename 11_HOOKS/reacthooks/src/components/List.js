import { useState, useEffect } from "react"; // Importa os hooks 'useState' e 'useEffect' do React

// Componente List que recebe a função 'getItems' como prop
const List = ({ getItems }) => {
  const [myItems, setMyItems] = useState([]); // Declara um estado chamado 'myItems' com valor inicial como array vazio

  // useEffect para buscar itens sempre que 'getItems' mudar
  useEffect(() => {
    console.log("Buscando itens do DB"); // Loga no console toda vez que o efeito é executado

    setMyItems(getItems); // Atualiza o estado 'myItems' com os valores retornados por 'getItems'
  }, [getItems]); // Dependência: o efeito será executado apenas quando 'getItems' mudar

  return (
    <div>
      {/** Renderiza os itens se existirem */}
      {myItems && myItems.map((item) => <p key={item}>{item}</p>)}
    </div>
  );
};

export default List; // Exporta o componente para uso em outros arquivos


//useState:
//O estado myItems é usado para armazenar os itens retornados por getItems.
//Inicialmente, é um array vazio ([]), pois não há itens carregados ainda.
//useEffect:
//É usado para executar a lógica de buscar os itens sempre que a prop getItems mudar.
//A dependência getItems no array de dependências do useEffect garante que ele só será reexecutado quando getItems for //alterado.
//getItems:
//É uma função recebida como prop. O valor retornado por ela é usado para atualizar o estado myItems.