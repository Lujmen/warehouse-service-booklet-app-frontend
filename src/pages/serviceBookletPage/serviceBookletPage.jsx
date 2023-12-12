import React from 'react';
import { useAuth } from '../../context/authProvider';
import { NavLink, Outlet } from 'react-router-dom';
import GantryTypeList from './components/gantryTypeList';
import CurrentWorkplaceComponent from './components/currentWorkplaceComponent';
import './serviceBooklet.css';

const ServiceBookletPage = () => {
  const { workplaceDetails } = useAuth();

  return (
    <div className="service-booklet-page-container bg-primary-100">
      <CurrentWorkplaceComponent />

      {workplaceDetails.workplace === 'gantry' ? (
        <GantryTypeList />
      ) : (
        <div className="service-booklet-entry-link-item">
          <NavLink className="link" to="serviceBookletEntry/forklift">
            Dodaj wpis
          </NavLink>
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default ServiceBookletPage;
