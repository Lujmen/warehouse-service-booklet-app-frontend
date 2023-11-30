import React from 'react';
import Nav from './components/nav';
import { Outlet } from 'react-router-dom';
import './activeUsersPage.css';

const ActiveUsersPage = () => {
  return (
    <div className="active-users-page-container">
      <Nav />
      <h1 className="active-users-page-header">Active User page</h1>
      <Outlet />
    </div>
  );
};

export default ActiveUsersPage;
