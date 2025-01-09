import { useEffect, useState, useRef } from "react"; // Importa os hooks 'useEffect', 'useState' e 'useRef' do React

const HookUseRef = () => { // Define o componente funcional 'HookUseRef'

  // 1 - useRef: Inicializa o número de renderizações com 0
  const numberRef = useRef(0); // Cria uma referência mutável que não dispara re-renderizações
  const [counter, setCounter] = useState(0); // Estado para o primeiro contador
  const [counterB, setCounterB] = useState(0); // Estado para o segundo contador

  // Incrementa o número de renderizações a cada re-renderização do componente
  useEffect(() => {
    numberRef.current = numberRef.current + 1; // Atualiza o valor de 'numberRef' sem causar re-renderização
  });

  // 2 - useRef e manipulação de DOM
  const inputRef = useRef(); // Cria uma referência para o elemento DOM do input
  const [text, setText] = useState(""); // Estado para o texto do input

  // Função que lida com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
    console.log(inputRef); // Loga a referência do input no console
    setText(""); // Limpa o estado do texto
    inputRef.current.focus(); // Foca o input usando a referência
  };

  return (
    <div>
      <h2>useRef</h2> {/* Título principal */}
      <p>O componente renderizou: {numberRef.current} vezes.</p> {/* Exibe o número de renderizações */}
      <p>Counter 1: {counter}</p> {/* Exibe o valor do primeiro contador */}
      <button onClick={() => setCounter(counter + 1)}>Contador A</button> {/* Incrementa o primeiro contador */}
      <p>Counter 2: {counterB}</p> {/* Exibe o valor do segundo contador */}
      <button onClick={() => setCounterB(counterB + 1)}>Contador B</button> {/* Incrementa o segundo contador */}

      {/** 2 - useRef e manipulação de DOM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text" // Campo de entrada de texto
          ref={inputRef} // Atribui a referência ao elemento DOM
          value={text} // Valor controlado pelo estado 'text'
          onChange={(e) => {
            setText(e.target.value); // Atualiza o estado 'text' com o valor digitado
          }}
        />
        <input type="submit" value="Enviar" /> {/* Botão de envio do formulário */}
      </form>
      <hr /> {/* Linha horizontal para separação */}
    </div>
  );
};

export default HookUseRef; // Exporta o componente para uso em outros arquivos


//O hook useRef é usado para:
//Criar referências mutáveis: Permite armazenar valores que persistem durante o ciclo de vida do componente sem disparar re-renderizações.
//Acessar diretamente o DOM: Útil para manipular elementos HTML, como inputs e botões.