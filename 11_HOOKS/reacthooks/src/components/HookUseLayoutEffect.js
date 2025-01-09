import { useLayoutEffect, useEffect, useState } from 'react' // Importa os hooks 'useLayoutEffect', 'useEffect' e 'useState' do React

const HookUseLayoutEffect = () => { // Define o componente funcional 'HookUseLayoutEffect'

    const [name, setName] = useState("Algum nome") // Define o estado 'name', inicializado com o valor "Algum nome"

    useEffect(() => { 
        console.log("2") // Exibe "2" no console
        setName("Mudou de novo!") // Atualiza o estado 'name' para "Mudou de novo!" após a renderização
    }, []) // O array de dependências vazio faz com que o 'useEffect' seja executado apenas uma vez, após a montagem do componente

    useLayoutEffect(() => { 
        console.log("1") // Exibe "1" no console
        setName("outro nome") // Atualiza o estado 'name' para "outro nome" antes da renderização ser concluída
    }, []) // O array de dependências vazio faz com que o 'useLayoutEffect' seja executado apenas uma vez, antes da pintura do componente

    console.log(name) // Exibe o valor atual do estado 'name' no console a cada renderização

    return ( // Retorna o JSX a ser renderizado
        <div> {/* Envolve o conteúdo em uma div */}
            <h2>HookUseLayoutEffect</h2> {/* Título do componente */}
            <p>Nome: {name}</p> {/* Exibe o valor atual do estado 'name' */}
        </div>
    )
}

export default HookUseLayoutEffect // Exporta o componente para uso em outros arquivos


//Explicação sobre o useLayoutEffect
//O useLayoutEffect é semelhante ao useEffect, mas a principal diferença está no momento em que ele é executado:

//useLayoutEffect:

//Executa o código antes que o navegador pinte a tela, ou seja, logo após o DOM ser atualizado.
//É útil para ajustes no layout ou leitura/alteração do DOM antes da renderização visível ao usuário.
//Pode causar atrasos na renderização se usado incorretamente, então deve ser reservado para casos em que é necessário /manipular diretamente o DOM ou sincronizar layout.
//useEffect:

//Executa o código após a renderização já ter sido feita na tela.
//É mais eficiente para a maioria dos casos, como buscar dados, configurar eventos ou executar efeitos colaterais que não alteram o layout imediatamente.
