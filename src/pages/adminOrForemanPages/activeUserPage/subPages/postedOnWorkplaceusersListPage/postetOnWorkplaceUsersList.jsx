import React from 'react';
import getUsersWhosePostetOnWorkplace from '../../../../../service/getUsersWhosePostetOnWorkplace';
import { useMutation, useQuery } from '@tanstack/react-query';
import PostedOnWorkplaceUserComponent from './components/postedOnWorkplaceUserComponent';
import kickOutUserFromWorkplace from '../../../../../service/kickOutUserFromWorkplace';
import './postedOnWorkplaceUserList.css';
import LoadingSpinner from '../../../../../components/loadingSpinner/loadingSpinner';

const PostetOnWorkplaceUsersList = () => {
  const {
    data: postedOnWorkplaceUsers,
    isError,
    error,
    isLoading,
    refetch,
  } = useQuery({ queryKey: ['postedOnWorkplaceUsers'], queryFn: () => getUsersWhosePostetOnWorkplace() });

  const { mutateAsync: kickOutFromWorkplace } = useMutation({
    mutationFn: (userId) => kickOutUserFromWorkplace(userId),
    onSuccess: () => refetch(),
  });

  if (isError) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  } else if (isLoading) {
    return (
      <div>
        <p>
          <LoadingSpinner />
        </p>
      </div>
    );
  } else {
    return (
      <div className="posted-on-workplace-users-list">
        <ul>
          {postedOnWorkplaceUsers.map((element, id) => (
            <li key={id}>
              <PostedOnWorkplaceUserComponent props={element} kickOutFromWorkplace={kickOutFromWorkplace} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default PostetOnWorkplaceUsersList;
