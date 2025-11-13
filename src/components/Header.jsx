import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Home</Link></li>

          {/* Projects with dropdown */}
          <li className="nav-item">
            <Link to="/projects" className="nav-link">Projects</Link>
            <ul className="dropdown-menu">
              <li><Link to="/nionswift_plugin">Nionswift Plugin</Link></li>
              <li><Link to="/internet_freedom">Data Visualization Project - Internet Freedom</Link></li>
              <li><Link to="/designwrld">DesignWrld</Link></li>
              <li><Link to="/easyeats">Easy Eats</Link></li>
              <li><Link to="/pokemonbinder">PokémonBinder</Link></li>
              <li><Link to="/financetracker">Finance Tracker</Link></li>

              
              
             

            </ul>
          </li>

          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
