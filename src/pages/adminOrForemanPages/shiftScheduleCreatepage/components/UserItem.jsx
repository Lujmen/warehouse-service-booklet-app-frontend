import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

const UserItem = ({ user, isDraggingOverlay }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: user._id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    border: '1px solid white',
    touchAction: 'none',
    width: '100%',
    margin: 'auto',
    padding: '.25rem 0 .25rem 0',

    minWidth: '10rem',
    maxWidth: '10rem',
    visibility: isDragging ? 'hidden' : 'visible',
    cursor: isDraggingOverlay ? 'grabbing' : 'grab',
    backgroundColor: isDraggingOverlay ? 'black' : 'transparent',
    borderRadius: '1rem',
  };

  return (
    <div key={user._id} ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <p style={{ display: 'flex', margin: 'auto', textAlign: 'center', justifyContent: 'center' }}>{user.username}</p>
    </div>
  );
};

export default UserItem;
