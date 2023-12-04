import React from 'react';

const PostedOnWorkplaceUserComponent = ({ props, kickOutFromWorkplace }) => {
  console.log(kickOutFromWorkplace);
  const { username, _id } = props;
  const { workplace, workplaceModel } = props.isActive[0];
  return (
    <div className="list-item">
      <div className="item-detail">{username}</div>
      <div className="item-detail">{workplace}</div>
      <div className="item-detail">{workplaceModel && workplaceModel}</div>
      <div>
        <button className="btn-primary" onClick={() => kickOutFromWorkplace(_id)}>
          Wypisz
        </button>
      </div>
    </div>
  );
};

export default PostedOnWorkplaceUserComponent;
