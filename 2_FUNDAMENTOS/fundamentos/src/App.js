//components
import FirstComponent from './components/FirstComponents';

//style /css
import './App.css';
import TemplateExpression from './components/TemplateExpression';
import MyComponent from './components/MyComponent';
import Events from './Events';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
    </div>
  );
}

export default App;
