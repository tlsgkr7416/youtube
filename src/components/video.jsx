import React, { Component } from 'react';
import styles from './video.module.css';

class Video extends Component {
    render() {
        const {item} = this.props;
        let videoId = typeof(item.id) === 'object' ? item.id.videoId : item.id;
        return (
            <React.Fragment>
                <iframe className={styles.video} id={item.id} type="text/html" width="580" height="405"
                       src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" allowFullScreen>
                </iframe>
                <h1>{item.snippet.title}</h1>
                <div>{item.snippet.description}</div>
            </React.Fragment>
        );
    }
}

export default Video;