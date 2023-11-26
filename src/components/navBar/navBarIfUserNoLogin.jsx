import React from 'react';
import { Link } from 'react-router-dom';

const NavBarIfUserNoLogin = () => {
  return (
    <div>
      <div>
        <Link to="/login">Zaloguj</Link>
      </div>
      <div>
        <Link>Strona Domowa</Link>
      </div>
      <div>
        <Link>Informacje</Link>
      </div>
    </div>
  );
};

export default NavBarIfUserNoLogin;
