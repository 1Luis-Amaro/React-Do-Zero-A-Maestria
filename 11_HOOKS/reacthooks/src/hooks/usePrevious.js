import { useEffect, useRef, useDebugValue } from "react"; // Importa os hooks 'useEffect', 'useRef' e 'useDebugValue' do React

// Declaração do custom hook 'usePrevious'
export const usePrevious = (value) => {
  const ref = useRef(); // Cria uma referência persistente que não muda entre renderizações

  // Adiciona informações de depuração usando o 'useDebugValue'
  useDebugValue("--- CUSTOM HOOK E USEDEBUGVALUE"); // Informação genérica sobre o hook
  useDebugValue("--- o número anterior é: " + value); // Exibe o valor passado como uma mensagem de debug

  useEffect(() => {
    ref.current = value; // Atualiza a referência com o valor atual após cada renderização
  });

  return ref.current; // Retorna o valor anterior, armazenado na referência
};

//O uso de useDebugValue permite que desenvolvedores vejam informações detalhadas sobre o custom hook no React DevTools.