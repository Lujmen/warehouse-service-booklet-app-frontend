import React, { useState } from 'react';

const InfoListItem = ({ props }) => {
  console.log(props);
  const { username } = props.user;
  const { content } = props;
  const { file } = props.image;
  const [displayImage, setDisplayImage] = useState(false);
  return (
    <div className="list-item-container">
      <div className="added-by">
        <p>Dodany przez: {username}</p>
      </div>
      <div className="content">{content}</div>
      <div>
        {displayImage && (
          <div className="image">
            <img src={file} alt="" />
          </div>
        )}
        {file && !displayImage ? (
          <button className="btn-primary" onClick={() => setDisplayImage(true)}>
            Pokaz zdjecie
          </button>
        ) : (
          file && (
            <button className="btn-primary" onClick={() => setDisplayImage(false)}>
              Ukryj zdjecie
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default InfoListItem;
