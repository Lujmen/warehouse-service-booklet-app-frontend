import React, { useState } from 'react';
import ChamferingRangeEntriesForm from './components/chamferingRangeEntriesForm';
import { useQuery } from '@tanstack/react-query';
import ChamferinRangeEntriesTime from './components/chamferinRangeEntriesTime';
import ChamferinEntryList from './components/chamferinEntryList';
import { getChamferingTime } from '../../../service/getChamferingTime';
import { checkIfShouldBeDisabledForChamferingTime, checkIfShouldBeDisabledForChamferingList } from './utils/checkIfShouldBeDisabled';
import getChamferingListByDate from '../../../service/getChamferingListByDate';
import './chamferingReportsPage.css';
import LoadingSpinner from '../../../components/loadingSpinner/loadingSpinner';

const ChamferingReportsPage = () => {
  const [queryData, setQueryData] = useState({ key: '', page: '1' });

  const {
    data: chamferingTime,
    isError: isErrorChamferingTime,
    isLoading: isLoadingChamferingTime,
  } = useQuery({
    queryKey: ['chamferingTime', queryData],
    queryFn: () => getChamferingTime(queryData),
    onSuccess: () => refetchChamferingDateRangeList(),
    enabled: checkIfShouldBeDisabledForChamferingTime(queryData),
    retry: false,
    cacheTime: 0,
    gcTime: 0,
  });

  const {
    data: chamferingDateRangeList,
    isError: isErrorChamferingDateRangeList,
    isLoading: isLoadingChamferingDateRangeList,
    refetch: refetchChamferingDateRangeList,
  } = useQuery({
    queryKey: ['chamferingDateRangeList', queryData],
    queryFn: () => getChamferingListByDate(queryData),
    enabled: checkIfShouldBeDisabledForChamferingList(queryData),
    retry: false,
    cacheTime: 0,
    gcTime: 0,
  });

  const submitData = (data) => {
    setQueryData({ ...queryData, key: data.key, endDate: data.endDate, startDate: data.startDate });
  };

  return (
    <div className="chamfering-page-main-container bg-primary-100">
      <ChamferingRangeEntriesForm handleSubmit={submitData} />
      {queryData?.key === 'time' && chamferingTime && !isLoadingChamferingTime && !isErrorChamferingTime ? (
        <ChamferinRangeEntriesTime time={chamferingTime} />
      ) : (
        isLoadingChamferingTime && <LoadingSpinner />
      )}
      {queryData?.key === 'list' && chamferingDateRangeList && !isErrorChamferingDateRangeList && !isLoadingChamferingDateRangeList ? (
        <ChamferinEntryList changePage={setQueryData} page={queryData.page} list={chamferingDateRangeList} />
      ) : (
        isLoadingChamferingDateRangeList && <LoadingSpinner />
      )}
    </div>
  );
};
export default ChamferingReportsPage;
