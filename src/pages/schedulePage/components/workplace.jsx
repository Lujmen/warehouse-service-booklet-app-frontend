import React from 'react';
import { Users } from './users';

const Workplace = (props) => {
  const { workplace } = props;

  return (
    <div>
      <h1>{workplace.workplace}</h1>
      <div>------------USERS--------------</div>
      <ul>
        <Users users={workplace.users} />
      </ul>

      <button className="btn-primary" onClick={() => console.log(workplace)}>
        workplace
      </button>
    </div>
  );
};

export default Workplace;
