import { useQuery } from '@tanstack/react-query';
import GantryTypesService from '../../service/gantryModelService';
import React, { useEffect } from 'react';
import { useAuth } from '../../context/authProvider';
import { Link, Outlet } from 'react-router-dom';
import GantryTypeList from './components/gantryTypeList';
import CurrentWorkplaceComponent from './components/currentWorkplaceComponent';
import LastEntries from './components/lastEntries';
import { useMemo } from 'react';

const ServiceBookletPage = () => {
  const { workplaceDetails } = useAuth();

  return (
    <div>
      <CurrentWorkplaceComponent />
      {workplaceDetails.workplace === 'gantry' ? <GantryTypeList /> : <Link to="serviceBookletEntry">Dodaj wpis</Link>}
      <Outlet />
      <LastEntries workplaceDetails={workplaceDetails} />
      <button onClick={() => console.log(workplaceDetails)}>check</button>
    </div>
  );
};

export default ServiceBookletPage;
