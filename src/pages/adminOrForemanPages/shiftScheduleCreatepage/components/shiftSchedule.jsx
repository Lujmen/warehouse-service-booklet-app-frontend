// ShiftSchedule.js

import React, { useState } from 'react';
import { ShiftColumn } from './shiftColumn';
import { UserList } from './userList';
import shiftScheduleService from '../../../../service/shiftScheduleService';
import { useQuery } from '@tanstack/react-query';
import userService from '../../../../service/userService';
import { initialSchedule } from '../data/initialSchedule ';
import { shifts } from '../data/intialShifts';
import { handleCreateSchedule } from '../utils/handleCreateSchedule';

const ShiftSchedule = () => {
  const {
    data: users,
    isLoading,
    isError,
    setData: setUsers,
  } = useQuery({ queryKey: ['users'], queryFn: userService.getAllUsers, retry: false, refetchOnWindowFocus: false });
  const [schedule, setSchedule] = useState(initialSchedule);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading users data</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {shifts.map((shift) => (
        <ShiftColumn key={shift.id} shift={shift} users={users} setUsers={setUsers} setSchedule={setSchedule} schedule={schedule} />
      ))}
      <UserList users={users} setUsers={setUsers} />
      <div>
        <button onClick={(e) => handleCreateSchedule(e, schedule)}>check</button>
      </div>
    </div>
  );
};

export default ShiftSchedule;
