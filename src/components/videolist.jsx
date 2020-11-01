import React, { Component } from 'react';
import VideoItem from './videoItem'
import styles from './videoList.module.css';
import { Link } from 'react-router-dom';

class Videolist extends Component {

    render() {
        return (
            <div className="App">
            <div className="main">
            <div className={styles.container}>
                {this.props.items.map((item, index) => <Link key={index} to={`/video/${index}`}><VideoItem item={item}/></Link>)}
            </div>
            </div>
            </div>
        )
    }
}

export default Videolist;