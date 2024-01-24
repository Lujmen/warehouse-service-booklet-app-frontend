import React, { useState } from 'react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  console.log(MouseEvent.clientY);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return <div></div>;
};

export default AudioPlayer;
