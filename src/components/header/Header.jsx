import './header.css';
import Logo from '../../assets/logo.svg';

function Header() {

  return (
    <header className="header">
      <img src={Logo} alt="logo" />
      <h1>Magasin de légumes frais et locaux au Val de Loire</h1>
    </header>
  )
}

export default Header;