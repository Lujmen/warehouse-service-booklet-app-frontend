import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableUser = ({ user }) => {
  const [, drag] = useDrag({
    type: 'USER',
    item: user,
  });

  return (
    <div
      ref={(node) => drag(node)}
      style={{
        margin: '5px',
        padding: '5px',
        border: '1px solid #ddd',
        cursor: 'move',
      }}
    >
      {user.username}
    </div>
  );
};

export default DraggableUser;
