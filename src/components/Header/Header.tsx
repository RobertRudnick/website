import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPersonWalkingArrowRight, faHome} from '@fortawesome/free-solid-svg-icons'
import {faGalacticRepublic} from '@fortawesome/free-brands-svg-icons'

const Header: React.FC= () => {
  return (
    <header className="custom-header">
    <div className="header-content">
      <nav className="navigation">
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/services" className="nav-link">
          Services
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </nav>
      <Link to="/" className="home-button">
        <FontAwesomeIcon className="home-icon" icon={faPersonWalkingArrowRight} />
        <FontAwesomeIcon className="home-icon" icon={faHome} />

      </Link>
    </div>
    <div className="header-decorations">
      <div className="shape shape-1"></div>
      <div className="shape shape-2">
        <FontAwesomeIcon color='black' size='4x' className='republic' icon={faGalacticRepublic} />
        </div>
      <div className="shape shape-3"></div>
    </div>
  </header>
  );
}

export default Header;
