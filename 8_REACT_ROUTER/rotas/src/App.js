//pages
import './App.css';
import Home from './pages/Home'
import About from './pages/About'

// 1 - config react router 
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//components
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Info from './pages/Info.js';
import NotFound from './pages/NotFound.js';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            {/**4 - rota dinamica */}
            <Route path='/products/:id' element ={<Product/>}/>
            {/** 6 - nested route */}
            <Route path='/products/:id/info' element ={<Info/>}/>
            {/*7 - no match route*/}
            <Route path='*' element={<NotFound/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
