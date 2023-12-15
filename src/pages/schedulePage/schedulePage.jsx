import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import shiftScheduleService from '../../service/shiftScheduleService';
import SelectWeekForm from './components/selectWeekForm';
import { useEffect } from 'react';
import shifts from './data/shifts';
import Shift from './components/shift';

const SchedulePage = () => {
  const [isNext, setIsNext] = useState(false);
  const {
    data: schedule,

    isFetching,
    isError,
    refetch,
  } = useQuery({ queryKey: ['scheduleForUser'], queryFn: () => shiftScheduleService.isExists(isNext), retry: false, gcTime: 0, staleTime: 0 });

  useEffect(() => {
    // Trigger a refetch when isNext changes
    refetch();
  }, [isNext]);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching schedule</div>;
  }

  // Render your component with the fetched schedule
  return (
    <div>
      <button onClick={() => console.log(schedule)}>check</button>
      <SelectWeekForm isNext={isNext} setIsNext={setIsNext} />
      {shifts.map((shift) => (
        <Shift shift={shift} schedule={schedule} />
      ))}
    </div>
  );
};

export default SchedulePage;
