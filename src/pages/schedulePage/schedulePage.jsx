import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import shiftScheduleService from '../../service/shiftScheduleService';
import SelectWeekForm from './components/selectWeekForm';
import { useEffect } from 'react';
import shifts from './data/shifts';
import Shift from './components/shift';
import LoadingSpinner from '../../components/loadingSpinner/loadingSpinner';
import './userSchedulePage.css';

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

  if (isError) {
    return <div>Error fetching schedule</div>;
  }

  // Render your component with the fetched schedule
  return (
    <div className="schedulePage bg-primary-100">
      <div style={{ blockSize: 'fit-content' }}>
        <SelectWeekForm isNext={isNext} setIsNext={setIsNext} />
        <ul className="main">
          {isFetching ? (
            <>
              <LoadingSpinner />
            </>
          ) : (
            shifts.map((shift) => (
              <li className="shift-item" style={{}}>
                <Shift shift={shift} schedule={schedule} />
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default SchedulePage;
