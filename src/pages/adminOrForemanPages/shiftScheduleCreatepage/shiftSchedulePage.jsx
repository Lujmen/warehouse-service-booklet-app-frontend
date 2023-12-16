import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ShiftScheduleForCurrentWeek from './components/shiftSchedule';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import userService from '../../../service/userService';
import './adminShiftScheludePage.css';
import LoadingSpinner from '../../../components/loadingSpinner/loadingSpinner';
import shiftScheduleService from '../../../service/shiftScheduleService';
import { useMemo } from 'react';
import { shifts } from './data/intialShifts';
import filterUsersFromExistingSchedule from './utils/filterUsersFromExistingSchedule';

const ShiftSchedulePage = () => {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => await userService.getAllUsers(),
    retry: false,
    refetchOnWindowFocus: false,
  });

  if (isLoading === true) {
    return <LoadingSpinner />;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        {isError && (
          <p>
            Error fetching users. Please try again later.
            {/* You can also display the specific error message if available */}
          </p>
        )}

        {!isLoading && !isError && <ShiftScheduleForCurrentWeek users={users} />}
      </div>
    </DndProvider>
  );
};

export default ShiftSchedulePage;
