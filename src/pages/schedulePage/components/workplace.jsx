import React from 'react';
import { Users } from './users';

const Workplace = (props) => {
  const { workplace } = props;

  return (
    <div
      style={{
        border: '2px solid orange',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '.5rem',
        padding: '.5rem',
      }}
    >
      <h1>{workplace.workplace}</h1>
      <div>Pracownik</div>
      <ul style={{ alignItems: 'center' }}>
        <Users users={workplace.users} />
      </ul>
    </div>
  );
};

export default Workplace;
