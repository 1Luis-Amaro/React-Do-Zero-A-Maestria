//pages
import './App.css';
import Home from './pages/Home'
import About from './pages/About'

// 1 - config react router 
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//components
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Info from './pages/Info.js';
import NotFound from './pages/NotFound.js';
import SearchForm from './components/SearchForm.js';
import Search from './pages/Search.js';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      <Navbar/>
      {/** 9 - serach */}
      <SearchForm/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            {/** 6 - nested route */}
            <Route path='/products/:id/info' element ={<Info/>}/>
            {/**4 - rota dinamica */}
            <Route path='/products/:id' element ={<Product/>}/>
            {/**9 - search */}
            <Route path='/search' element={<Search />} />
            {/**10 - = redirect*/}
            <Route path='/company' element={<Navigate to='/about'/>} />
            {/*7 - no match route*/}
            <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
