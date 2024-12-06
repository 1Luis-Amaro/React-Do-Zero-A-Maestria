import { useState, useEffect } from "react"; // Importa os hooks useState e useEffect do React para gerenciar estados e efeitos colaterais.

//4 - custom hook
export const useFetch = (url) => { // Define o custom hook useFetch que recebe uma URL como parâmetro.
    const [data, setData] = useState(null); // Cria um estado chamado "data" para armazenar os dados buscados da URL.

    //5 - refatorando post 
    const [config, setConfig] = useState(null); // Cria um estado "config" para configurar as requisições HTTP (POST ou DELETE).
    const [method, setMethod] = useState(null); // Cria um estado "method" para armazenar o método HTTP utilizado (POST ou DELETE).
    const [callFetch, setCallFetch] = useState(false); // Estado para controlar o momento de disparar a requisição.

    // 6 - loading 
    const [loading, setLoading] = useState(false); // Cria um estado "loading" para indicar se os dados estão sendo carregados.

    // 7 tratando erros
    const [error, setError] = useState(null); // Cria um estado "error" para armazenar mensagens de erro, caso ocorram.

    // 8 - desafio 6
    const [itemId, setItemId] = useState(null); // Cria um estado "itemId" para armazenar o ID de um item que será deletado.

    const httpConfig = (data, method) => { // Função para configurar os parâmetros de requisição HTTP.
        if (method === "POST") { // Se o método for POST:
            setConfig({
                method, // Define o método como POST.
                Headers: { // Configura os cabeçalhos HTTP.
                    "Content-type": "application/json" // Define o tipo de conteúdo como JSON.
                },
                body: JSON.stringify(data) // Converte os dados do produto em uma string JSON.
            });

            setMethod(method); // Atualiza o estado "method" com o valor POST.
        }
        else if (method === "DELETE") { // Se o método for DELETE:
            setConfig({
                method, // Define o método como DELETE.
                Headers: { // Configura os cabeçalhos HTTP.
                    "Content-type": "application/json" // Define o tipo de conteúdo como JSON.
                },
            });

            setMethod(method); // Atualiza o estado "method" com o valor DELETE.
            setItemId(data); // Define o ID do item que será deletado.
        }
    };

    useEffect(() => { // Efeito que executa a função fetchData quando "url" ou "callFetch" mudam.
        const fetchData = async () => { // Função assíncrona para buscar dados da URL.
            setLoading(true); // Define o estado "loading" como true (dados estão sendo carregados).

            try {
                const res = await fetch(url); // Faz uma requisição GET para a URL.
                const json = await res.json(); // Converte a resposta da requisição em JSON.

                setData(json); // Atualiza o estado "data" com os dados retornados.
            } catch (error) { // Caso ocorra um erro:
                console.log(error.message); // Exibe o erro no console.
                setError("Houve algum erro ao carregar os dados!"); // Atualiza o estado "error" com uma mensagem.
            }

            setLoading(false); // Define o estado "loading" como false (carregamento concluído).
        };
        fetchData(); // Chama a função fetchData.
    }, [url, callFetch]); // Dependências: a função será executada sempre que "url" ou "callFetch" mudar.

    //5 - refatorando post 
    useEffect(() => { // Efeito que executa a função httpRequest quando "config", "method" ou "url" mudam.
        let json; // Variável para armazenar a resposta da requisição.

        const httpRequest = async () => { // Função assíncrona para realizar requisições HTTP.
            if (method === "POST") { // Se o método for POST:
                let fetchOptions = [url, config]; // Cria as opções de requisição.
                const res = await fetch(...fetchOptions); // Faz a requisição POST.
                json = await res.json(); // Converte a resposta em JSON.
                setCallFetch(json); // Atualiza o estado "callFetch" com a resposta.
            } else if (method === "DELETE") { // Se o método for DELETE:
                const deleteUrl = `${url}/${itemId}`; // Cria a URL para deletar um item específico.
                const res = await fetch(deleteUrl, config); // Faz a requisição DELETE.
                json = await res.json(); // Converte a resposta em JSON.
            }
            setCallFetch(json); // Atualiza o estado "callFetch" com a resposta.
        };
        httpRequest(); // Chama a função httpRequest.
    }, [config, method, url]); // Dependências: a função será executada sempre que "config", "method" ou "url" mudar.

    return { data, httpConfig, loading, error }; // Retorna os valores para serem usados no componente que utiliza esse custom hook.
};
