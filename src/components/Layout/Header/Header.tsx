import { Link } from 'react-router-dom';
import 'styles/components/_header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="list">
          <li className="listItem">
            <Link to={''}>Hira</Link>
          </li>
          <li className="listItem">
            <Link to={''}>Home</Link>
          </li>
          <li className="listItem">
            <Link to={'/projects'}>Projects</Link>
          </li>
          <li className="listItem">
            <Link to={'/about-us'}>About</Link>
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
