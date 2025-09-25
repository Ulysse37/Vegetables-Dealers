import './header.css';
import Logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";

function Header() {

  return (
    <header className="header">
      <img src={Logo} alt="logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">Présentation</Link>
      </nav>
    </header>
  )
}

export default Header;