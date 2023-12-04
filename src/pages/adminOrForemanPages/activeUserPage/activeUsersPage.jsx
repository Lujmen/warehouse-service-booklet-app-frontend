import React from 'react';
import Nav from './components/nav';
import { Outlet } from 'react-router-dom';
import './activeUsersPage.css';

const ActiveUsersPage = () => {
  return (
    <div className="active-users-page-container bg-primary-100">
      <h1 className="active-users-page-header">Active User page</h1>
      <Nav />

      <Outlet />
    </div>
  );
};

export default ActiveUsersPage;
