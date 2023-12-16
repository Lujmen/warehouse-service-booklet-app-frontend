// ShiftSchedule.js

import React, { useEffect, useMemo, useState } from 'react';
import { ShiftColumn } from './shiftColumn';
import { UserList } from './userList';
import shiftScheduleService from '../../../../service/shiftScheduleService';
import { useQueryClient } from '@tanstack/react-query';
import { initialSchedule } from '../data/initialSchedule ';
import { shifts } from '../data/intialShifts';
import { handleCreateSchedule } from '../utils/handleCreateSchedule';
import filterUsersFromExistingSchedule from '../utils/filterUsersFromExistingSchedule';
import SelectWeekForm from './selectWeekForm';
import LoadingSpinner from '../../../../components/loadingSpinner/loadingSpinner';

const ShiftScheduleForCurrentWeek = ({ users }) => {
  const queryCLient = useQueryClient();

  const [isForNextWeek, setIsForNextWeek] = useState(false);
  const [schedule, setSchedule] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // eslint-disable-next-line
  const filtredUsers = useMemo(() => filterUsersFromExistingSchedule(users, schedule, shifts, queryCLient), [schedule]);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const existSchedule = await shiftScheduleService.isExists(isForNextWeek);
        if (isMounted && existSchedule) {
          setSchedule(await existSchedule);
          setIsLoading(false);
        } else {
          setSchedule(initialSchedule);
          setIsLoading(false);
        }
      } catch (error) {}
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [isForNextWeek]);

  if (isLoading || schedule === '' || typeof filtredUsers === 'undefined') {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="bg-primary-100">
      <h1 style={{ marginLeft: '2rem' }}>Shift Schedule with Drag and Drop</h1>
      <div className="shift-column-container" style={{ display: 'flex', fmarginTop: '2rem', padding: '2rem' }}>
        {shifts.map((shift) => (
          <ShiftColumn key={shift.id} shift={shift} users={filtredUsers} setSchedule={setSchedule} schedule={schedule} />
        ))}
        <UserList users={filtredUsers} />
        <div>
          <button className="btn-primary" onClick={(e) => handleCreateSchedule(e, schedule, isForNextWeek)}>
            check
          </button>
        </div>
        <SelectWeekForm isForNextWeek={isForNextWeek} setIsForNextWeek={setIsForNextWeek} />
      </div>
    </div>
  );
};

export default ShiftScheduleForCurrentWeek;
