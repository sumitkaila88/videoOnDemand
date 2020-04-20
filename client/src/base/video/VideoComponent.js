import React from 'react';

const Video = React.forwardRef((props, videoRef) => {

  return (
  <video ref = {videoRef} onPlay = {props.requestFullScreen} onEnded = {props.exitFullScreen} autoPlay controls >
    <source src={props.src} type="video/mp4" />
  </video>
  );
});

export default Video;