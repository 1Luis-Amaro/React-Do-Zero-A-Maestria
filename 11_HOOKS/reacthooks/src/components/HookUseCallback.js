import { useCallback, useState } from "react"; // Importa os hooks 'useCallback' e 'useState' do React
import List from "./List"; // Importa o componente 'List'

const HookUseCallback = () => {
  const [counter, setCounter] = useState(0); // Define um estado chamado 'counter' com valor inicial 0

  // Define uma função memorizada que retorna uma lista
  const getItemsFromDatabase = useCallback(() => {
    return ["a", "b", "c"]; // Retorna um array com os itens "a", "b" e "c"
  }, []); // A função só será recriada se as dependências (neste caso, o array vazio) mudarem

  return (
    <div>
      <h2>useCallback</h2>
      {/* Passa a função 'getItemsFromDatabase' como prop para o componente List */}
      <List getItems={getItemsFromDatabase} />
      {/* Botão para alterar o estado 'counter' */}
      <button onClick={() => setCounter(counter + 1)}>Alterar</button>
      <p>{counter}</p> {/* Exibe o valor atual de 'counter' */}
      <hr />
    </div>
  );
};

export default HookUseCallback; // Exporta o componente 'HookUseCallback'

//O componente HookUseCallback gerencia um estado (counter) que é atualizado quando o botão é clicado.
//A função getItemsFromDatabase é memorizada com useCallback e nunca será recriada porque não tem dependências que mudem.
//O componente List recebe a função getItemsFromDatabase como prop (getItems), o que é importante para evitar //re-renderizações desnecessárias de List.