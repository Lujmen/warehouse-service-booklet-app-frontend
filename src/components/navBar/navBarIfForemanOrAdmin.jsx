import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authProvider';

const NavBarIfForemanOrAdmin = () => {
  const { handleLogOut } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Link onClick={() => handleLogOut(navigate)}>Wyloguj</Link>
      </div>
      <div>
        <Link to={'/activeUsers'}>Aktywni uzytkownicy</Link>
      </div>
      <div>
        <Link to={'/chamferingRaports'}>Raport Fazowania</Link>
      </div>
    </div>
  );
};

export default NavBarIfForemanOrAdmin;
