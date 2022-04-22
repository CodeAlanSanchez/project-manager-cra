import { Link } from 'react-router-dom';
import 'styles/components/_header.scss';
import HamburgerMenu from './HamburgerMenu.tsx';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <HamburgerMenu />
        <ul className="navigation desktop list">
          <li className="listItem logo">
            <Link to={''}>Hira</Link>
          </li>
          <li className="listItem">
            <Link to={''}>Home</Link>
          </li>
          <li className="listItem">
            <Link to={'/projects'}>Projects</Link>
          </li>
          <li className="listItem">
            <Link to={'/about'}>About</Link>
          </li>
          <li className="listItem">
            <Link to={'/account'}>Account</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
