import React from 'react';
import userService from '../../../../../service refactor/userService';
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
  } = useQuery({ queryKey: ['postedOnWorkplaceUsers'], queryFn: () => userService.getAllPostedOnWorkplace() });

  const { mutateAsync: kickOutFromWorkplace } = useMutation({
    mutationFn: (userId) => userService.kickOutFromWorkplace(userId),
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
        <LoadingSpinner />
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
