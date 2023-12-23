import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

const UserItem = ({ user, isDraggingOverlay }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: user._id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    touchAction: 'none',
    textAlign: 'center',
    borderRadius: '.25rem',

    // visibility: isDragging ? 'hidden' : 'visible',
    cursor: isDraggingOverlay ? 'grabbing' : 'grab',
    backgroundColor: isDraggingOverlay ? 'lightblue' : 'royalblue',
    border: isDraggingOverlay ? '1px solid yellow' : '1px solid white',
  };
  const pStyle = {
    color: isDraggingOverlay ? 'yellow' : 'white',
  };

  return (
    <div className="user-item" key={user._id} ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <p style={pStyle}>{user.username}</p>
    </div>
  );
};

export default UserItem;
