function App() {
  //1 - variaveis
  const name: string = "Luis";
  const age: number = 30;
  const isWorking: boolean = false;

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
    </div>
  );
}

export default App;
