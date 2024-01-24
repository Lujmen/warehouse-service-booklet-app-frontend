import React from 'react';

const PostedOnWorkplaceUserComponent = ({ props, kickOutFromWorkplace }) => {
  console.log(kickOutFromWorkplace);
  const { model, _id } = props;
  const { user } = props;
  const { workplace, workplaceModel } = props.model[0];
  return (
    <div className="list-item">
      <div className="item-detail">{user.username}</div>
      <div className="item-detail">{model}</div>
      <div className="item-detail">{workplaceModel && workplaceModel}</div>
      <div>
        <button className="btn-primary" onClick={() => kickOutFromWorkplace(user._id)}>
          Wypisz
        </button>
      </div>
    </div>
  );
};

export default PostedOnWorkplaceUserComponent;
