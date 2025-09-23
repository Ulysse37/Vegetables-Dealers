import './header.css';
import Logo from '../../assets/logo.svg';

function Header() {

  return (
    <header className="header">
      <img src={Logo} alt="logo" />
    </header>
  )
}

export default Header;