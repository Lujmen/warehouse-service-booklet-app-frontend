import { useQuery } from '@tanstack/react-query';
import React from 'react';
import getActiveUsers from '../../../../../service/getActiveusers';

const ActiveUsersList = (props) => {
  const { data: activeUsers, isError, error, isLoading } = useQuery({ queryKey: ['activeUsers'], queryFn: () => getActiveUsers() });
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
        <ul>
          {activeUsers.map((element, id) => (
            <li key={id}>
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
