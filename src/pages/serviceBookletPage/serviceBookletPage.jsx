import React from 'react';
import { useAuth } from '../../context/authProvider';
import { NavLink, Outlet } from 'react-router-dom';
import GantryTypeList from './components/gantryTypeList';
import CurrentWorkplaceComponent from './components/currentWorkplaceComponent';
import LastEntries from './components/lastEntries';
import './serviceBooklet.css';

const ServiceBookletPage = () => {
  const { workplaceDetails } = useAuth();

  return (
    <div className="main-container">
      <CurrentWorkplaceComponent />
      <div className="service-booklet-entry-box">
        <div className="service-booklet-entry-link-box">
          {workplaceDetails.workplace === 'gantry' ? (
            <GantryTypeList />
          ) : (
            <div className="service-booklet-entry-link-item">
              <NavLink to="serviceBookletEntry">Dodaj wpis</NavLink>
            </div>
          )}
        </div>
        <Outlet />
      </div>
      <div>
        <LastEntries workplaceDetails={workplaceDetails} />
      </div>
    </div>
  );
};

export default ServiceBookletPage;
