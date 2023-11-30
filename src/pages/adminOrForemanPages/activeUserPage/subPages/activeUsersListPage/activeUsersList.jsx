import { useQuery } from '@tanstack/react-query';
import React from 'react';
import getActiveUsers from '../../../../../service/getActiveusers';
import './activeUsersList.css';

const ActiveUsersList = (props) => {
  const { data: activeUsers, isError, error, isLoading } = useQuery({ queryKey: ['loggedInUsers'], queryFn: () => getActiveUsers() });

  if (isError) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  } else if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div>
        <ul className="active-users-lis">
          {activeUsers.map((element, id) => (
            <li className="active-users-list-item" key={id}>
              <div>
                <p>{element.username}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default ActiveUsersList;
