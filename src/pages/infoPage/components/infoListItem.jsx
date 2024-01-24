import React, { useState } from 'react';
import infoService from '../../../service refactor/infoService';
import LoadingSpinner from '../../../components/loadingSpinner/loadingSpinner';
import { useQueryClient } from '@tanstack/react-query';
import { useAuth } from '../../../context/authProvider';

const InfoListItem = ({ props }) => {
  const { userRole } = useAuth();
  const queryClient = useQueryClient();
  const [image, setImage] = useState(null);
  const [isImageLoading, setImageLoading] = useState(true);
  console.log(props.user?.username);
  // const { username } = props.user;
  const { content } = props;
  let username = props.user?.username;

  const [displayImage, setDisplayImage] = useState(false);

  return (
    <div className="list-item-container">
      <div className="added-by">
        <p>Dodany przez: {username}</p>
      </div>
      <div className="content">{content}</div>
      <div>
        {displayImage &&
          (isImageLoading ? (
            <LoadingSpinner />
          ) : (
            <div className="image">
              <img src={image.image} alt="" />
            </div>
          ))}
        {props.image && !displayImage ? (
          <button
            className="btn-primary"
            onClick={() => {
              getImage(props.image);
              setDisplayImage(true);
            }}
          >
            Pokaz zdjecie
          </button>
        ) : (
          props.image && (
            <button className="btn-primary" onClick={() => setDisplayImage(false)}>
              Ukryj zdjecie
            </button>
          )
        )}
      </div>

      {/* avalible and visible only if admin or higher */}
      {(userRole.toLowerCase() === 'foreman' || userRole.toLowerCase() === 'admin') && (
        <button onClick={() => deleteInfo(props._id)} className="btn-primary">
          delete
        </button>
      )}
    </div>
  );
  async function getImage(iamgeId) {
    setImageLoading(true);
    const data = await infoService.getImage(iamgeId);
    setImage(data);
    console.log(image);
    console.log(iamgeId);
    setImageLoading(false);
  }
  async function checkImage() {
    console.log(image);
  }
  async function deleteInfo(infoId) {
    const isDeletet = await infoService.deleteInfo(infoId);
    console.log(isDeletet);
    if (await isDeletet) {
      queryClient.refetchQueries(['infos']);
    }
  }
};

export default InfoListItem;
