import React from 'react';
import { useAuth } from '../../context/authProvider';
import { Link, useNavigate } from 'react-router-dom';

const NavBarIfUserPostedOnGantry = () => {
  const { handleLogOut } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Link onClick={() => handleLogOut(navigate)}>Wyloguj</Link>
      </div>
      <div>
        <Link to="/">Strona Domowa</Link>
      </div>
      <div>
        <Link to="/info">Informacje</Link>
      </div>
      <div>
        <Link to="/chamfering">Fazowanie</Link>
      </div>
      <div>
        {/* to juz ma byc protected route */}
        <Link to="/serviceBooklet">Ksiazka serwisowa</Link>
      </div>
    </div>
  );
};

export default NavBarIfUserPostedOnGantry;
