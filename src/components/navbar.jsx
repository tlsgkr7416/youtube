import React, { Component } from 'react';
import styles from './navbar.module.css';
import Inputform from './inputform';

class Navbar extends Component {
 
    render() {
        return (
            <ul className={styles.navContainer}>
               <li><img src={'/logo.png'} alt="logo" className={styles.logo} /></li>
               <li className={styles.name}>Youtube</li>
               <li className={styles.form}><Inputform btsStart={this.props.btsStart}/></li>
            </ul>
        );
    }
}

export default Navbar;