import { useQuery } from '@tanstack/react-query';
import React from 'react';
import getActiveUsers from '../../../service/getActiveusers';
import ActiveUsersList from './subPages/activeUsersListPage/activeUsersList';
import Nav from '../../../components/activeUsersPageNavBar/nav';
import { Outlet } from 'react-router-dom';

const ActiveUsersPage = () => {
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
        <Nav />
        <h1>Active User page</h1>
        <Outlet />
      </div>
    );
  }
};

export default ActiveUsersPage;
