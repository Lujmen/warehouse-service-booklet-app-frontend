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

    visibility: isDragging ? 'hidden' : 'visible',
    cursor: isDraggingOverlay ? 'grabbing' : 'grab',
    backgroundColor: isDraggingOverlay ? '#305099' : 'transparent',
  };

  return (
    <div className="user-item" key={user._id} ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <p>{user.username}</p>
    </div>
  );
};

export default UserItem;
