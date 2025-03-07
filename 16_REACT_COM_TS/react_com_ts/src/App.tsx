//4 - Importação de componentes
import FirtsComponent from "./components/FirtsComponent";

//5 - desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, {Category} from "./components/Destructuring";

//6 - useState
import State from "./components/State";

function App() {
  //1 - variaveis
  const name: string = "Luis";
  const age: number = 30;
  const isWorking: boolean = false;

  //2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking ? (
        <div>
          <p>Está trabalhando</p>
        </div>
      ) : (
        <p>Não está trabalhando</p>
      )}
      <h3> {userGreeting(name)} </h3>

      <FirtsComponent />
      <SecondComponent name="segundo" />
      <Destructuring
        title="Primeiro post"
        content="Algum conteudo"
        commentsQty={10}
        tags={["ts", "js"]}
        category={Category.TS}
      />
      <Destructuring
        title="Segundo Post"
        content="Mais outro conteúdo"
        commentsQty={4}
        tags={["python"]}
        category={Category.TS}
      />
      <Destructuring
        title="Segundo Post"
        content="Mais outro conteúdo"
        commentsQty={4}
        tags={["python"]}
        category={Category.P}
      />

      <State/>
    </div>
  );
}

export default App;
