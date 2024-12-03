import './App.css'; // Importa o arquivo de estilo CSS que define a aparência do nosso app.

import { useState, useEffect } from "react"; // Importa duas funções do React: useState (para gerenciar estado) e useEffect (para executar efeitos colaterais).

// 4 - custom hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products"; // Define a URL onde os produtos estão armazenados no servidor local.

function App() { // Define o componente principal do aplicativo.
  const [products, setProducts] = useState([]); // Cria um estado chamado "products", que começa como uma lista vazia. Esse estado será preenchido com os produtos.

//4 - custom
const {data: items, httpConfig, loading} = useFetch(url)


  const [name, setName] = useState(""); // Cria um estado chamado "name", que vai armazenar o nome de um novo produto. Começa como uma string vazia.
  const [price, setPrice] = useState(""); // Cria um estado chamado "price", que vai armazenar o preço de um novo produto. Começa como uma string vazia.

  // 1 - Resgatando dados
  //useEffect(() => { // Executa o código dentro desta função quando o componente for exibido pela primeira vez.
  //  async function fetchData() { // Cria uma função assíncrona (que espera por respostas) para buscar os produtos no servidor.
  //    const res = await fetch(url); // Faz uma requisição HTTP (GET) para a URL dos produtos e espera pela resposta.
  //    
  //    const data = await res.json(); // Converte a resposta da requisição para JSON (um formato de dados que podemos usar no app).
//
  //    setProducts(data); // Atualiza o estado "products" com os dados (lista de produtos) recebidos do servidor.
  //  }
//
   // fetchData(); // Chama a função fetchData para buscar os dados assim que o componente aparecer na tela.
  //}, []); // O array vazio significa que o useEffect vai rodar apenas uma vez, quando o componente for montado.

  // 2 - Adicionando produtos
  const handleSubmit = async (e) => { // Cria uma função assíncrona que será chamada quando o formulário for enviado.
    e.preventDefault(); // Evita que o comportamento padrão do formulário ocorra, ou seja, impede o recarregamento da página.

    const product = { name, price }; // Cria um objeto "product" com os valores dos estados "name" e "price".

   // const res = await fetch(url, { // Faz uma requisição HTTP (POST) para enviar o novo produto para o servidor.
   //   method: "POST", // Define o método da requisição como "POST", que é usado para criar novos dados no servidor.
    //  headers: {
   //     "Content-Type": "application/json", // Especifica que estamos enviando dados em formato JSON.
   //   },
   //   body: JSON.stringify(product), // Converte o objeto "product" em uma string JSON para enviar no corpo da requisição.
   // });
//
    // 3 - Carregamento dinâmico
    //const addedProduct = await res.json(); // Converte a resposta da requisição para JSON, recebendo o novo produto adicionado.
//
    //setProducts((prevProducts) => [...prevProducts, addedProduct]); // Atualiza o estado "products" adicionando o novo produto à lista existente.

    //5 - refatorando post
    httpConfig(product, "POST")

    setName(""); // Limpa o campo de nome do formulário após o envio.
    setPrice(""); // Limpa o campo de preço do formulário após o envio.
  };

  return ( // Inicia o que será renderizado (mostrado) na tela.
    <div className="App"> {/* Cria uma div com a classe CSS "App", que define o estilo dessa área. */}
      <h1>Lista de produtos</h1> {/* Exibe o título "Lista de produtos" na página. */}
      {/**6 - loading */}
      {loading && <p> Carregando dados...</p>}
      {!loading && <ul> {/* Cria uma lista não ordenada para mostrar os produtos. */}
        {items && items.map((product) => ( // Percorre a lista de produtos e, para cada produto, cria um item da lista (li).
          <li key={product.id}> {product.name} - R$:{product.price} </li> // Mostra o nome e o preço de cada produto na lista, usando a chave "id" para identificar cada um.
        ))}
      </ul>}
      <div className="add-product"> {/* Cria uma div com a classe "add-product" para organizar a parte de adicionar produtos. */}
        <form onSubmit={handleSubmit}> {/* Quando o formulário for enviado, chama a função handleSubmit. */}
          <label> {/* Cria um rótulo para o campo de nome. */}
            Nome:
            <input 
              type="text" // Define o campo como um input de texto.
              value={name} // O valor do campo será o estado "name".
              name="name" // Nome do campo é "name".
              onChange={(e) => setName(e.target.value)} // Atualiza o estado "name" sempre que o valor do input mudar.
            />
          </label>
          <label> {/* Cria um rótulo para o campo de preço. */}
            Preço:
            <input 
              type="number" // Define o campo como um input numérico.
              value={price} // O valor do campo será o estado "price".
              name="price" // Nome do campo é "price".
              onChange={(e) => setPrice(e.target.value)} // Atualiza o estado "price" sempre que o valor do input mudar.
            />
          </label>
          <input type="submit" value="Criar" /> {/* Cria o botão de envio, que ao ser clicado, chama handleSubmit. */}
        </form>
      </div>
    </div>
  );
}

export default App; // Exporta o componente App para que possa ser usado em outros arquivos.
