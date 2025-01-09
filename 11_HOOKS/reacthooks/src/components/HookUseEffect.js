import { useEffect, useState } from 'react' // Importa os hooks 'useEffect' e 'useState' do React

const HookUseEffect = () => { // Define o componente funcional 'HookUseEffect'

    // 1 - useEffect sem dependências
    useEffect(() => { 
        console.log("Estou sendo executado") // Este efeito é executado após cada renderização do componente
    }) 

    const [number, setNumber] = useState(1) // Define o estado 'number' inicializado com 1

    const changeSomething = () => { 
        setNumber(number + 1) // Atualiza o estado 'number' incrementando 1
    }

    // 2 - useEffect com array de dependências vazio
    useEffect(() => { 
        console.log("Serei executado apenas uma vez") // Este efeito é executado apenas na montagem inicial do componente
    }, []) // O array vazio significa que o efeito não será executado novamente após a montagem

    // 3 - useEffect com item no array de dependências
    const [anotherNumber, setAnotherNumber] = useState(0) // Define o estado 'anotherNumber' inicializado com 0

    useEffect(() => { 
        if (anotherNumber > 0) { 
            console.log("Sou executado apenas quando o anotherNumber muda") // Executado apenas quando 'anotherNumber' é atualizado e maior que 0
        }
    }, [anotherNumber]) // 'anotherNumber' como dependência: o efeito será executado quando 'anotherNumber' mudar

    // 4 - Cleanup no useEffect
    useEffect(() => { 
        // Código comentado para exemplificar o uso de cleanup
        // const timer = setTimeout(() => { // Define um temporizador de 2 segundos
        //     console.log("hello world") // Exibe a mensagem no console
        //     setAnotherNumber(anotherNumber + 1) // Incrementa 'anotherNumber'
        // }, 2000)
        // return () => clearTimeout(timer) // Limpa o temporizador ao desmontar ou atualizar o efeito
    }, [anotherNumber]) // 'anotherNumber' como dependência

    return ( // Retorna o JSX a ser renderizado
        <div> {/* Envolve o conteúdo em uma div */}
            <h2>useEffect</h2> {/* Exibe o título */}
            <p>Number: {number}</p> {/* Mostra o valor do estado 'number' */}
            <button onClick={changeSomething} >Executar!</button> {/* Botão que chama 'changeSomething' ao clicar */}
            <p>Another Number: {anotherNumber}</p> {/* Mostra o valor do estado 'anotherNumber' */}
            <button onClick={() => setAnotherNumber(anotherNumber + 1)} >Mudar anotherNumber</button> {/* Incrementa 'anotherNumber' ao clicar */}
            <hr /> {/* Linha horizontal para separar o conteúdo */}
        </div>
    )
}

export default HookUseEffect // Exporta o componente para ser usado em outros arquivos

//Sem dependências: O useEffect sem array de dependências ([]) é executado após cada renderização, útil para efeitos contínuos.
//Array de dependências vazio ([]): Executa o efeito apenas uma vez, na montagem inicial do componente, ideal para ///inicializações.
//Com dependências específicas: Executa o efeito apenas quando os valores no array de dependências mudam, útil para acompanhar mudanças de estado ou props.
//Cleanup no useEffect: Usado para limpar efeitos anteriores, como temporizadores, assinaturas ou manipulação direta do DOM, para evitar comportamentos indesejados ao desmontar ou atualizar o componente.