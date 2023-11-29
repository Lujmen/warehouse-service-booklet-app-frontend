import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/authProvider';
import { NavLink, useNavigate } from 'react-router-dom';
import * as navData from './navbarData';
import './navBar.css';

export const NavBar = () => {
  const [navBarData, setNavBarData] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const { handleLogOut, workplaceDetails } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (workplaceDetails.workplace === 'foreman' || workplaceDetails.workplace === 'admin') {
      setNavBarData(navData.forForemanOrAdmin);
    } else if (workplaceDetails.workplace === 'gantry') {
      setNavBarData(navData.forUsersPostedOnGantry);
    } else if (workplaceDetails.workplace === 'forklift') {
      setNavBarData(navData.forUsersPostedOnForklift);
    } else {
      setNavBarData(navData.forNoPosted);
    }
  }, [workplaceDetails.workplace]);
  return (
    <nav>
      {navBarData.length > 0 && (
        <div>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? 'open' : ''}>
            {workplaceDetails.workplace !== '' && (
              <li>
                <NavLink to="/" onClick={() => handleLogOut(navigate)}>
                  Wyloguj
                </NavLink>
              </li>
            )}

            {navBarData.map((element, index) => (
              <li key={index}>
                <NavLink to={element.to}>{element.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
