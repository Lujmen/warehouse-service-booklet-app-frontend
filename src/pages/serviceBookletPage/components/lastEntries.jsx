import React from 'react';
import getCurrentWeekServiceBookletEntries from '../../../service/getCurrentWeekServiceBookletEntries';
import { useQuery } from '@tanstack/react-query';
import LastEntriesTabel from './lastEntriesTabel';

const LastEntries = (props) => {
  const { workplaceDetails } = props;

  const {
    data: lastEntries,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['lastEntries'],
    queryFn: () => getCurrentWeekServiceBookletEntries(workplaceDetails),
    retry: false,
    gcTime: 0,
  });

  if (error) {
    return <div>Error...</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return <LastEntriesTabel data={lastEntries} />;
  }
};

export default LastEntries;
