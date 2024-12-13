import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

  import { AuthProvider } from './context/AuthContext';

//pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <NavBar/>
      <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
