import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import GantryTypesService from '../../../service/gantryModelService';

const GantryTypeList = () => {
  const {
    data: gantryTypes,
    error,
    isPending,
  } = useQuery({ queryKey: ['gantryTypes'], queryFn: GantryTypesService.getGantryTypes, gcTime: 0, retry: false });

  if (isPending) {
    <h1>Loading...</h1>;
  } else {
    return (
      <div>
        {gantryTypes?.map((type, i) => (
          <ul key={i}>
            <li>
              <Link to="serviceBookletEntry" state={{ gantryType: type }}>
                {type}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    );
  }
};

export default GantryTypeList;
