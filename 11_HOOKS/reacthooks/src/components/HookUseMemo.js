import { useEffect, useState, useMemo } from "react"; // Importa os hooks 'useEffect', 'useState' e 'useMemo' do React

const HookUseMemo = () => { // Define o componente funcional 'HookUseMemo'

    const [number, setNumber] = useState(0); // Define o estado 'number', inicializado com 0

    // Define uma lista fixa de números premium com o uso de useMemo
    const premiumNumbers = useMemo(() => {
        return ["0", "100", "200"]; // Retorna um array de strings
    }, []); // O array de dependências vazio faz com que o cálculo seja memoizado e não seja refeito em cada renderização

    useEffect(() => {
        console.log("Premium numbers foi alterado"); // Executa sempre que o array premiumNumbers muda
    }, [premiumNumbers]); // premiumNumbers como dependência do efeito, mas como ele é memoizado, não mudará

    return ( // Retorna o JSX a ser renderizado
        <div> {/* Envolve o conteúdo em uma div */}
            <h2>useMemo</h2> {/* Título do componente */}
            <input 
                type="text" 
                onChange={(e) => setNumber(e.target.value)} // Atualiza o estado 'number' com o valor digitado no input
            />
            {premiumNumbers.includes(number) ? ( 
                <p>Parabéns, acertou o número</p> // Exibe a mensagem se o número digitado estiver na lista premiumNumbers
            ) : ""} {/* Caso contrário, não exibe nada */}
            <hr /> {/* Adiciona uma linha horizontal */}
        </div>
    );
};

export default HookUseMemo; // Exporta o componente para uso em outros arquivos


//O hook useMemo é utilizado para memoizar valores que demandam cálculos custosos ou são imutáveis. Ele evita que cálculos desnecessários sejam feitos em toda renderização, otimizando o desempenho.

//No código:
//
//premiumNumbers é um array constante que só precisa ser definido uma vez, então o useMemo impede que ele seja recriado em cada renderização, mantendo-o estável.
//Isso é útil porque, sem o useMemo, mesmo um array fixo seria recriado a cada renderização, causando reexecuções desnecessárias de efeitos ou re-renderizações.