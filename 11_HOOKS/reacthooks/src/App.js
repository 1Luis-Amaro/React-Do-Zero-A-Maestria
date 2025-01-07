import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home';
import About from './About';
import { HookUseContext } from './components/HookUseContext';


function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
        <HookUseContext>
        <BrowserRouter>   
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>

        <Routes>
            <Route  path='/' element={<Home/>} />
            <Route  path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
        </HookUseContext>
    </div>
  );
}

export default App;
