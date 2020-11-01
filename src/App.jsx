import React, { Component } from 'react';
import './app.css';
import Video from './components/video';
import Videolist from './components/videolist';
import VideoItem from './components/videoItem';
import { Route } from 'react-router-dom';
import Main from './components/main';
import NavbarRoute from './components/NavbarRoute';

//pureComponent 언제 쓰면 좋을까? 라이프사이클 어떨때 사용하면 좋을까?
class App extends Component {
 state = {
    items:[]
  }

  videoStart = () => {
      this.props.youtubeServer.videoStart().then((result) => this.setState({items: [...result]}));
  }

  btsStart = () => {
     this.props.youtubeServer.btsStart().then((result) => this.setState({items: [...result]}));
  }

  componentDidMount() {
      this.videoStart();
  }

  render() {
    return(
     <React.Fragment> 
    

       <NavbarRoute exact path="/" component={Videolist} btsStart={this.btsStart} items={this.state.items}/>

 
       <NavbarRoute
         path="/video/:id"
         component={Main}
         items={this.state.items}
       />
       
    </React.Fragment>
    )}
}

export default App;