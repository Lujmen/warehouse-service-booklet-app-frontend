import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ShiftSchedule from './components/shiftSchedule';

const ShiftSchedulePage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h1>Shift Schedule with Drag and Drop</h1>
        <ShiftSchedule />
      </div>
    </DndProvider>
  );
};

export default ShiftSchedulePage;
