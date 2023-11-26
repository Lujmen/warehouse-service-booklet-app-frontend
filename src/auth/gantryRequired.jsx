import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authProvider';

const GantryRequired = () => {
  const navigate = useNavigate();
  const { workplaceDetails } = useAuth();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (workplaceDetails.workplace !== 'gantry') {
      navigate('/');
    }
  }, [workplaceDetails.workplace, navigate]);

  return workplaceDetails.workplace ? <Outlet /> : null;
};

export default GantryRequired;
