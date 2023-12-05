import { useQuery } from '@tanstack/react-query';
import React from 'react';
import getInfos from '../../../service/getInfos';
import InfoListItem from './infoListItem';
import { useState } from 'react';
import PaginationBar from '../../../components/paginationBar/paginationBar';
import LoadingSpinner from '../../../components/loadingSpinner/loadingSpinner';

const InfoList = () => {
  const [page, setPage] = useState({ page: 1 });
  const {
    data: infos,
    isLoading,
    error,
  } = useQuery({ queryKey: ['infos', page], queryFn: () => getInfos(page.page), retry: false, gcTime: 0, retry: 0 });
  if (isLoading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
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
      {infos.results.map((info, index) => (
        <InfoListItem key={index} props={info} />
      ))}
      <PaginationBar setPage={setPage} page={page.page} totalPages={infos.pages} />
    </div>
  );
};

export default InfoList;
