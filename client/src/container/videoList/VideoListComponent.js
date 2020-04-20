import React, { Component } from 'react';
import Axios from 'axios';

import Div from '../../base/parent/DivComponent';
import PosterItem from '../posterItem/PosterItemComponent';
import Video from '../../base/video/VideoComponent';
import Configs from '../../globalConfigs';
import Modal from '../../base/modal/ModalComponent';
import VideoDetails from '../../presentation/videoDetails/VideoDetailsComponent';

import './videoList.scss';

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  state = {
    playVideo: false,
    videoURL: '',
    currVideoID: '',
    showModal: false,
    videoDetails: '',
  }


  posterClickHandler = (videoContent, id) =>{
    this.setState({
      playVideo: true,
      videoURL: videoContent.url,
      currVideoID: id
    });
  }

  videoStartHandler = () => {
    this.videoRef.current.requestFullscreen();
  }

  detailClickHandler = (video) => {
    this.setState({
      showModal: true,
      videoDetails: video,
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false,
    })
  }

  videoEndHandler = (videoID) => {
    Axios({
      method: 'POST',
      url: `${Configs.serverURL}history`,
      data: {
        videoID,
      }
    });

    this.setState({
      playVideo: false,
    });
    document.exitFullscreen();
  }

  render() { 
    return ( 
      <Div className ="videoListContainer">
      <ul>
      {this.props.videosList.entries.map(entry => {
        return (
          <li key = {entry.id}>
          <PosterItem 
            src = {entry.images[0].url}
            alt = {entry.title}
            clicked = {() => this.posterClickHandler(entry.contents[0], entry.id)}
            btnClicked = {() => this.detailClickHandler(entry)}
            />
        </li>
        )
        
      })}
      </ul>
      <Modal 
        closeClick = {() => this.closeModal()}
        show = {this.state.showModal}
      >
        {this.state.videoDetails && <VideoDetails details = {this.state.videoDetails} /> }
      </Modal>
      {this.state.playVideo && <Video 
      ref = {this.videoRef}
      src = {this.state.videoURL} 
      requestFullScreen = {() => this.videoStartHandler()}
      exitFullScreen = {() => this.videoEndHandler(this.state.currVideoID)}/>}
    </Div>
     );
  }
}

export default VideoList;