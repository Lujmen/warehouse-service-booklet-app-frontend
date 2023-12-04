import { useQuery } from '@tanstack/react-query';
import React from 'react';
import getInfos from '../../../service/getInfos';
import InfoListItem from './infoListItem';

const InfoList = () => {
  const { data: infos, isLoading, error } = useQuery({ queryKey: ['infos'], queryFn: getInfos, retry: false });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!infos || infos.length === 0) {
    return <div>No information available.</div>;
  }
  return (
    <div className="list-container">
      <h2 className="fs-primary-heading">InfoList</h2>
      {infos.map((info, index) => (
        <InfoListItem key={index} props={info} />
      ))}
    </div>
  );
};

export default InfoList;
