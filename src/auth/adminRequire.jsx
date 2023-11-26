import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authProvider';

const AdminOrForemanRequired = () => {
  const navigate = useNavigate();
  const { workplaceDetails } = useAuth();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (workplaceDetails.workplace.toLowerCase() === 'foreman' || workplaceDetails.workplace.toLowerCase() === 'admin') {
    } else {
      navigate('/');
    }
  }, [workplaceDetails.workplace, navigate]);

  return workplaceDetails.workplace ? <Outlet /> : null;
};

export default AdminOrForemanRequired;
