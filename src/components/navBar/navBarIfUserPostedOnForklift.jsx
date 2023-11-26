import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authProvider';

const NavBarIfUserPostedOnForklift = () => {
  const { handleLogOut } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Link onClick={() => handleLogOut(navigate)}>Wyloguj</Link>
      </div>
      <div>
        <Link>Strona Domowa</Link>
      </div>
      <div>
        <Link>Informacje</Link>
      </div>
      <div>
        {/* to juz ma byc protected route */}
        <Link to="/serviceBooklet">Ksiazka serwisowa</Link>
      </div>
    </div>
  );
};

export default NavBarIfUserPostedOnForklift;
