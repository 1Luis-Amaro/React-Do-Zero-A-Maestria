import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Info from './pages/Info';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
     <h1>Context API</h1>
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/products" element={<Product/>}/>
     </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
