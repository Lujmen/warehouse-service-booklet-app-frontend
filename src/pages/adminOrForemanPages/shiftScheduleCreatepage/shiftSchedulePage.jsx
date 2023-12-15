import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ShiftScheduleForCurrentWeek from './components/shiftSchedule';
import { useQuery } from '@tanstack/react-query';
import userService from '../../../service/userService';

const ShiftSchedulePage = () => {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({ queryKey: ['users'], queryFn: userService.getAllUsers, retry: false, refetchOnWindowFocus: false });

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h1>Shift Schedule with Drag and Drop</h1>

        {isLoading && <p>Loading...</p>}

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
