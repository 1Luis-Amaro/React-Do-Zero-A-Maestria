import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Form</h2>
      <MyForm user={{ name: "josias", email: "josias@dsad.com", bio: "sou um advogado", role: "admin" }} />
    </div>
  );
}

export default App;
