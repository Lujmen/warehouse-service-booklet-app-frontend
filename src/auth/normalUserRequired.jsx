import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authProvider';

const NormalUserRequired = () => {
  const navigate = useNavigate();
  const { workplaceDetails } = useAuth();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (workplaceDetails.workplace === 'foreman') {
      navigate('/home');
    }
  }, [workplaceDetails, navigate]);

  return workplaceDetails.workplace !== 'foreman' ? <Outlet /> : null;
};

export default NormalUserRequired;
