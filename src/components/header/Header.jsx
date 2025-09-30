import './header.css';
import Logo from '../../assets/logo.svg';
import { NavLink } from "react-router-dom";

function Header() {

  return (
    <header className="header">
      <img src={Logo} alt="logo" />
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Accueil
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          Présentation
        </NavLink>
      </nav>
    </header>
  )
}

export default Header;