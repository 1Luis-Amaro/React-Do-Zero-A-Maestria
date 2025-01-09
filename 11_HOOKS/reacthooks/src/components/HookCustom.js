import { useState } from "react"; // Importa o hook useState do React
import { usePrevious } from "../hooks/usePrevious"; // Importa o hook customizado 'usePrevious'

const HookCustom = () => {
  // Define um estado 'number' com valor inicial 0 e uma função 'setNumber' para atualizá-lo
  const [number, setNumber] = useState(0);

  // Usa o hook customizado 'usePrevious' para armazenar o valor anterior de 'number'
  const previousValue = usePrevious(number);

  return (
    <div>
      <h2>Custom Hook</h2>
      {/* Exibe o valor atual de 'number' */}
      <p>Atual: {number}</p>
      {/* Exibe o valor anterior armazenado pelo hook customizado */}
      <p>Anterior: {previousValue}</p>
      {/* Botão para alterar o valor de 'number' para um número aleatório */}
      <button onClick={() => setNumber(Math.random)}>Alterar!</button>
      <hr />
    </div>
  );
};

export default HookCustom; // Exporta o componente 'HookCustom'
