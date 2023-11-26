import React from 'react';
import getUsersWhosePostetOnWorkplace from '../../../../../service/getUsersWhosePostetOnWorkplace';
import { useQuery } from '@tanstack/react-query';

const PostetOnWorkplaceUsersList = () => {
  const {
    data: postedOnWorkplaceUsers,
    isError,
    error,
    isLoading,
  } = useQuery({ queryKey: ['postedOnWorkplaceUsers'], queryFn: () => getUsersWhosePostetOnWorkplace() });
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
          {postedOnWorkplaceUsers.map((element, id) => (
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

export default PostetOnWorkplaceUsersList;
