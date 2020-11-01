import React, { Component } from 'react';
import styles from './videoItem.module.css'

class VideoItem extends Component {
    render() {
        const {id, snippet} = this.props.item
        return (
            <React.Fragment>
                <div className={styles.content}>
                    <img src={snippet.thumbnails.medium.url} className={styles.image}/>
                    <div className={styles.title}>{snippet.title}</div>
                </div>
            </React.Fragment>
        );
    }
}

export default VideoItem;