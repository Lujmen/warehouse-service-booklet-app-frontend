import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import GantryTypesService from '../../../service/gantryModelService';

const GantryTypeList = () => {
  const {
    data: gantryTypes,
    error,
    isPending,
  } = useQuery({ queryKey: ['gantryTypes'], queryFn: GantryTypesService.getGantryTypes, gcTime: 0, retry: false });
  const navigate = useNavigate();



  if (isPending) {
    <h1>Loading...</h1>;
  } else {
    return gantryTypes?.map((type, i) => (
      <div className="service-booklet-entry-link-item">
        <NavLink className="link" to={`serviceBookletEntry/${type}`} state={{ gantryType: type }}>
          {type}
        </NavLink>
      </div>
    ));
  }
};

export default GantryTypeList;
