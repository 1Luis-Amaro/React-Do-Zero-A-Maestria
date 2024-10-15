//components
import FirstComponent from './components/FirstComponents';
import TemplateExpression from './components/TemplateExpression';
import MyComponent from './components/MyComponent';
import Events from './Events';
import Challenge from './components/Challenge'

//style /css
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
      <Challenge/>
    </div>
  );
}

export default App;
