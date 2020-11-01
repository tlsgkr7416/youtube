import React, { Component } from 'react'
import styles from './main.module.css';
import Navbar from './navbar';
import VideoItem from './videoItem';
import Video from './video';
import { Link } from 'react-router-dom';

class Main extends Component {
    componentDidMount() {
        
    }
    render() {
        const {items} = this.props;
        let index = this.props.match.params.id;
        return (
            <div className={styles.container}>
                <div className={styles.underContainer}>
                   <div className={styles.leftContent}>
                       <div className={styles.videoContent}>
                          <Video item={items[index]} />      
                       </div>
                   </div>
                   <div className={styles.rightContent}>
                       {items.map((item, i) => 
                            <Link to={`/video/${i}`} key={i}>
                               <VideoItem item={item} />
                            </Link>
                        )}
                   </div>
                </div>
            </div>
        )
    }
}

export default Main;