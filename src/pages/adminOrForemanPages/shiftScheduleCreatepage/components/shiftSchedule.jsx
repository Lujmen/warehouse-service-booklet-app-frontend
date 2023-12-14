// ShiftSchedule.js

import React, { useEffect, useState } from 'react';
import { ShiftColumn } from './shiftColumn';
import { UserList } from './userList';
import shiftScheduleService from '../../../../service/shiftScheduleService';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import userService from '../../../../service/userService';
import { initialSchedule } from '../data/initialSchedule ';
import { shifts } from '../data/intialShifts';
import { handleCreateSchedule } from '../utils/handleCreateSchedule';
import filterUsersFromExistingSchedule from '../utils/filterUsersFromExistingSchedule';

const ShiftSchedule = () => {
  const queryCLient = useQueryClient();
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({ queryKey: ['users'], queryFn: userService.getAllUsers, retry: false, refetchOnWindowFocus: false });
  const [schedule, setSchedule] = useState('');

  const { mutateAsync } = useMutation({
    mutationFn: filterUsersFromExistingSchedule,
    onSuccess: (filtredUsers) => {
      queryCLient.setQueryData(['users'], filtredUsers);
    },
  });

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const existSchedule = await shiftScheduleService.isExists();
        if (isMounted && existSchedule) {
          setSchedule(await existSchedule);
        } else {
          setSchedule(initialSchedule);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);
  useEffect(() => {
    if (users && schedule !== '') {
      mutateAsync({
        key: ['users'],
        data: { users, schedule, shifts },
      });
    }
  }, [users, schedule, mutateAsync]);

  if (isLoading || schedule === '') {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading users data</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {shifts.map((shift) => (
        <ShiftColumn key={shift.id} shift={shift} users={users} setSchedule={setSchedule} schedule={schedule} />
      ))}
      <UserList users={users} />
      <div>
        <button onClick={(e) => handleCreateSchedule(e, schedule)}>check</button>
      </div>
    </div>
  );
};

export default ShiftSchedule;
