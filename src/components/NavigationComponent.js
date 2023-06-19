import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/planet.png';
import '../styles/NavigationComponent.css';

const NavigationBar = () => (
  <div className="navbar">
    <div className="navbar-left">
      <Link to="/" className="logo-name">
        <img src={logo} className="logo" alt="logo" />
        Space Travelers Hub
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link">Rockets</Link>
          </li>
          <li>
            <Link to="/missions" className="nav-link">Missions</Link>
          </li>
          <li>
            <Link to="/myprofile" className="nav-link">My Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default NavigationBar;
