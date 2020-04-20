import React from 'react';
import VideoList from '../videoList/VideoListComponent'

const VideoListContainer = props => {
  return (
    <VideoList 
      videosList = {props.videosList}
    />
  );
}

export default VideoListContainer;