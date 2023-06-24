import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';
import '../styles/NavigationComponent.css';
import { getRockets } from '../redux/rockets/rocketsSlice';
import { fetchMissions } from '../redux/missions/missionsSlice';

const NavigationBar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <div className="navbar">
      <div className="navbar-left">
        <NavLink to="/" className="logo-name">
          <img src={logo} className="logo" alt="logo" />
          Space Travelers Hub
        </NavLink>
      </div>
      <nav className="navbar-right">
        <ul>
          <li>
            <NavLink to="/" className="nav-link">Rockets</NavLink>
          </li>
          <li>
            <NavLink to="/missions" className="nav-link">Missions</NavLink>
            <span className="separator">|</span>
          </li>
          <li>
            <NavLink to="/myprofile" className="nav-link">My Profile</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
