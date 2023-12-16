import React from 'react';
import { Users } from './users';

const Workplace = (props) => {
  const { workplace } = props;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '.5rem',
        padding: '.5rem',
        minHeight: '2rem',
      }}
    >
      <h1 style={{ minWidth: '15rem', textAlign: 'center', border: '1px solid white', borderRadius: '1rem' }}>{workplace.workplace}</h1>
      <div>Pracownik</div>
      <ul style={{ alignItems: 'center' }}>
        <Users users={workplace.users} />
      </ul>
    </div>
  );
};

export default Workplace;
