import React, { Component } from 'react';
import Axios from 'axios';
import VideoList from '../videoList/VideoListComponent';


import Configs from '../../globalConfigs'

class VideosHistory extends Component {
  state = {
    loaded: false,
    videoList: this.props.entries,
    viewedHistory: [],
    filteredList: {
      entries: [],
    },
  }

  componentDidMount() {
    Axios.get(`${Configs.serverURL}history`)
         .then(response => {
           
          const historyArr = response.data.map(item => item.videoID) 
          const filteredArr = this.state.videoList.filter(currentItem => {
            return historyArr.indexOf(currentItem.id) !== -1
          })
           this.setState({
             loaded: true,
             viewedHistory: historyArr,
             filteredList: {
               entries: filteredArr,
             }
           });
         })
  }

  

  render() { 
    return ( 
      this.state.filteredList.entries.length ? <VideoList videosList={this.state.filteredList}/>  : <h2>No items in history</h2>
    );
  }
}
 
export default VideosHistory;