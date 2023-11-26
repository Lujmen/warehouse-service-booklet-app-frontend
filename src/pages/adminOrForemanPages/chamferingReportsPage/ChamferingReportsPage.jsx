import React, { useState } from 'react';
import ChamferingRangeEntriesForm from './components/chamferingRangeEntriesForm';
import { useQuery } from '@tanstack/react-query';
import ChamferinRangeEntriesTime from './components/chamferinRangeEntriesTime';
import ChamferinEntryList from './components/chamferinEntryList';
import { getChamferingTime } from '../../../service/getChamferingTime';
import { checkIfShouldBeDisabledForChamferingTime, checkIfShouldBeDisabledForChamferingList } from './utils/checkIfShouldBeDisabled';
import getChamferingListByDate from '../../../service/getChamferingListByDate';

const ChamferingReportsPage = () => {
  const [queryData, setQueryData] = useState({ key: '' });
  const {
    data: chamferingTime,
    isError: isErrorChamferingTime,
    isLoading: isLoadingChamferingTime,
  } = useQuery({
    queryKey: ['chamferingTime'],
    queryFn: () => getChamferingTime(queryData),
    onSuccess: () => refetchChamferingDateRangeList(),

    enabled: checkIfShouldBeDisabledForChamferingTime(queryData),
    retry: false,
    cacheTime: 0,
  });

  const {
    data: chamferingDateRangeList,
    isError: isErrorChamferingDateRangeList,
    isLoading: isLoadingChamferingDateRangeList,
    refetch: refetchChamferingDateRangeList,
  } = useQuery({
    queryKey: ['chamferingDateRangeList'],
    queryFn: () => getChamferingListByDate(queryData),
    enabled: checkIfShouldBeDisabledForChamferingList(queryData),
    retry: false,
    cacheTime: 0,
  });

  const submitData = (data) => {
    setQueryData(data);
  };

  return (
    <div>
      <ChamferingRangeEntriesForm handleSubmit={submitData} />
      {queryData?.key === 'time' && chamferingTime && !isLoadingChamferingTime && !isErrorChamferingTime && (
        <ChamferinRangeEntriesTime time={chamferingTime} />
      )}
      {queryData?.key === 'list' && chamferingDateRangeList && !isErrorChamferingDateRangeList && !isLoadingChamferingDateRangeList && (
        <ChamferinEntryList list={chamferingDateRangeList} />
      )}
    </div>
  );
};
export default ChamferingReportsPage;
