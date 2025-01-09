import { useReducer, useState } from "react"; // Importa os hooks 'useReducer' e 'useState' do React

const HookUseReducer = () => { // Define o componente funcional 'HookUseReducer'

  // 1 - Começando com o useReducer: define o estado 'number' e a função 'dispatch'
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state); // Atualiza o estado com um número aleatório
  });

  // 2 - Avançando no useReducer: Define um array inicial de tarefas
  const initialTasks = [
    { id: 1, text: "Fazer alguma coisa" }, // Tarefa 1
    { id: 2, text: "Fazer outra coisa" }, // Tarefa 2
  ];

  // Função redutora para manipular as tarefas
  const taskReducer = (state, action) => {
    switch (action.type) { // Verifica o tipo da ação
      case "ADD": // Adicionar nova tarefa
        const newTask = {
          id: Math.random(), // Gera um ID único
          text: taskText, // Define o texto da nova tarefa
        };

        setTaskText(""); // Reseta o valor do campo de texto

        return [...state, newTask]; // Retorna o novo estado com a tarefa adicionada

      case "DELETE": // Deletar tarefa
        return state.filter((task) => task.id !== action.id); // Retorna o estado sem a tarefa de ID correspondente

      default: // Caso o tipo da ação não seja reconhecido
        return state; // Retorna o estado atual
    }
  };

  const [taskText, setTaskText] = useState(""); // Define o estado 'taskText' para o texto da tarefa
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks); // Usa o useReducer para gerenciar o estado das tarefas

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    dispatchTasks({ type: "ADD" }); // Dispara a ação de adicionar tarefa
  };

  // Função para remover uma tarefa com base no ID
  const removeTask = (id) => {
    dispatchTasks({ type: "DELETE", id }); // Dispara a ação de deletar tarefa
  };

  return (
    <div>
      <h2>useReducer</h2> {/* Título principal */}
      <p>Número: {number}</p> {/* Exibe o número atual */}
      <button onClick={dispatch}>Alterar número</button> {/* Botão que altera o número aleatório */}
      
      <h3>Tarefas:</h3> {/* Subtítulo para a lista de tarefas */}
      {tasks.map((task) => ( 
        <li 
          key={task.id} // Define uma chave única para cada tarefa
          onDoubleClick={() => removeTask(task.id)} // Remove a tarefa ao clicar duas vezes
        >
          {task.text} {/* Exibe o texto da tarefa */}
        </li>
      ))}

      <form onSubmit={handleSubmit}> {/* Formulário para adicionar uma nova tarefa */}
        <input
          type="text" // Campo de entrada de texto
          onChange={(e) => setTaskText(e.target.value)} // Atualiza o estado 'taskText' com o valor digitado
          value={taskText} // Define o valor atual do campo de texto como o estado 'taskText'
        />
        <input type="submit" value="Enviar" /> {/* Botão para enviar o formulário */}
      </form>
      <hr /> {/* Linha horizontal para separação */}
    </div>
  );
};

export default HookUseReducer; // Exporta o componente para uso em outros arquivos


//O hook useReducer é usado para gerenciar estados mais complexos ou quando múltiplas ações precisam ser tratadas em um único estado.

//Estado inicial: Um estado inicial é passado como argumento para o useReducer.
//Função redutora: Define como o estado será atualizado com base na ação disparada. É similar ao conceito de reducers em Redux.
//Ações: Ações descrevem o que deve ser feito no estado, geralmente contendo um tipo e, opcionalmente, payload (dados adicionais).