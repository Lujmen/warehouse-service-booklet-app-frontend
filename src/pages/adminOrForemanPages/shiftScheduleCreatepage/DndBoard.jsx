import React, { useEffect, useState } from 'react';
import { fetchUsers } from './utils/fetchUsers';
import { DndContext, DragOverlay, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import UserItem from './components/UserItem';
import UsersColumn from './components/UsersColumn';
import { initialSchedule, shifts } from './data/data';

import { createPortal } from 'react-dom';
import { createScheduleFormUSerList } from './utils/createSheduleFromUSerList';
import { fetchScheduleIfExists } from './utils/fetchScheduleIfExists';
import ShiftColumn from './components/shiftColumn';
import LoadingSpinner from '../../../components/loadingSpinner/loadingSpinner';
import { scheduleModificationFor12HoursShift } from './utils/scheduleModificationFor12HoursShift';
import Select12HoursShiftForm from './components/select12HoursShiftForm';

const DndBoard = () => {
  // need to chenge state after schedule fetched
  const [is12HoursShift, set12HoursShift] = useState({ smallCart: false, crane: false, forklift: false });
  const [schedule, setSchedule] = useState(initialSchedule);
  const [isLoading, setIsLoading] = useState(true);
  const [dragingUser, setDragingUser] = useState(null);
  const [users, setUsers] = useState([]);

  //nibyy to jest sensor ktory inicjuje aktywacje dragowania ?
  //dizeki niemu nie wiem co ale nie psuje sie ekrna

  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 1,
    },
  });
  //chuj wiem ale z tym to dziala
  const touchSensor = useSensor(TouchSensor, {
    // Press delay of 250ms, with tolerance of 5px of movement

    activationConstraint: {
      delay: 100,
      tolerance: 5,
    },
  });
  const sensors = useSensors(mouseSensor, touchSensor);

  useEffect(() => {
    fetchUsers(setUsers, setIsLoading, setSchedule, set12HoursShift);
  }, []);

  if (isLoading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  } else {
    return (
      <div>
        {/* submit button container */}
        <div style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
          <button style={{ padding: '.5rem' }} onClick={() => createScheduleFormUSerList(users, schedule)}>
            Zapisz
          </button>
          {/* 12h shift options */}
          <Select12HoursShiftForm
            set12HoursShift={set12HoursShift}
            is12HoursShift={is12HoursShift}
            submitFunction={() => scheduleModificationFor12HoursShift(is12HoursShift, setSchedule, setUsers)}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <DndContext sensors={sensors} onDragStart={onDragStart} onDragEnd={onDragEnd}>
            <UsersColumn users={users.filter((user) => user.columnId === 'unsigned')} />
            {shifts.map((shift, index) => (
              <ul>
                <li key={index + 'shift'}>
                  <ShiftColumn users={users} shiftColumnIndex={index} shift={shift.type} workplaces={schedule[shift.type]} />
                </li>
              </ul>
            ))}
            {createPortal(
              <DragOverlay>{dragingUser && <UserItem user={dragingUser} isDraggingOverlay={true} />}</DragOverlay>,
              document.getElementById('root')
            )}
          </DndContext>
        </div>
      </div>
    );
    // for now i leave this like that
    function onDragEnd(e) {
      const { active, over } = e;
      console.log(over.data.current.is12HoursShift);
      if (!e.over) return;
      const userIndex = users.findIndex((user) => user._id === active.id);
      setUsers((prevUsers) =>
        prevUsers.map((user, index) =>
          index === userIndex ? { ...user, columnId: over.id, is12HoursShift: over.data.current.is12HoursShift } : user
        )
      );
      setDragingUser(null);
      return;
    }
    function onDragStart(e) {
      const { active } = e;
      const userIndex = users.findIndex((user) => user._id === active.id);
      setDragingUser(users[userIndex]);
    }
  }
};

export default DndBoard;
