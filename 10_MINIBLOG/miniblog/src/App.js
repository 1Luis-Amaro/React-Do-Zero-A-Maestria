import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';

//pages


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
