import './header.css';
import Logo from '../../assets/logo.svg';

function Header() {

  return (
    <header className="header">
      <img src={Logo} alt="logo" />
      <h1>La ferme Bouton </h1>
    </header>
  )
}

export default Header;