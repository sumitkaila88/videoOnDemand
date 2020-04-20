import React, { Component } from 'react';
import { Route }from 'react-router-dom';
import axios from 'axios'
//Global calls from node modules

import Header from './container/header/HeaderComponent';
import Div from './base/parent/DivComponent';
import Parent from './base/parent/ParentComponent';
import VideoListContainer from './container/videoListContainer/VideoListContainerComponent';
import VideosHistory from './container/videosHistory/VideosHistoryComponent';

import Configs from './globalConfigs';

// CSS imports
import './App.scss';
import Spinner from './base/spinner/spinner';

class App extends Component {
  state = {
    loading: false,
    videoList: {
      totalCount: 0,
      entries: []
    },
    navigation: [
      {
        href: '/',
        lable: 'Home',
      },
      {
        href: '/history',
        lable: 'History',
      }
    ],
    iserror: false
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });

    axios.get(`${Configs.serverURL}videolist`)
    .then(res => {
      this.setState({
        loading: false,
        videoList: {
          totalCount: res.data.totalCount,
          entries: res.data.entries,
        }
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() { 
    let page = this.state.loading ? <Spinner /> : (
    <Parent>
      <Route path = '/history'>
             <VideosHistory 
             entries = {this.state.videoList.entries}/>
      </Route>
      <Route exact path = '/'>
            <VideoListContainer 
              videosList = {this.state.videoList}
            />
      </Route> 
    </Parent>);
    return ( 
        <Div className="App">
          <Header navigation = {this.state.navigation}/>
          {page}
          {this.state.loading && <h2> Looks like your Server is not running kindly start server at port 7777</h2>}
        </Div>
     );
  }
}

export default App;
