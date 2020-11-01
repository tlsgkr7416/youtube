import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import YoutubeServer from './server/youtubeServer';
 
const youtubeServer = new YoutubeServer(process.env.REACT_APP_YOUTUBE_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <App youtubeServer={youtubeServer}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
