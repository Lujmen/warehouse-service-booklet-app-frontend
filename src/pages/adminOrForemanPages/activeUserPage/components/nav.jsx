import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <div className="active-users-nav">
      <div className="nav-item">
        <NavLink className="link" to="./posted">
          Wpisani na stanowisko
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink className="link" to="./active">
          Zalogowani
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
