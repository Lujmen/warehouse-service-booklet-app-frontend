import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <div>
        <Link to="./posted">Wpisani na stanowisko</Link>
      </div>
      <div>
        <Link to="./active">Zalogowani</Link>
      </div>
    </div>
  );
};

export default Nav;
