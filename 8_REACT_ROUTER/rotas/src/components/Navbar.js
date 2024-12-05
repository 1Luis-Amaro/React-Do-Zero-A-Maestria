//2 - links com react router
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
       {/* <Link to="/" >Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/product/id">Produtos</Link>
         */}  
         <NavLink to='/'>Home</NavLink>
         <NavLink to='/about' className={({isActive}) => (isActive ? 'esta-ativo' : 'nao-ativo')}>about</NavLink>
         <NavLink to='/product/id'>Produtos</NavLink>
    </nav>
  )
}

export default Navbar