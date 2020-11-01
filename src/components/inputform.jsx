import React, { Component } from 'react';
import styles from './inputform.module.css';
import { Redirect } from 'react-router-dom';

class Inputform extends Component {
    
    inputRef = React.createRef();
    
    handleSubmit = (event) => {
        event.preventDefault(); //뭐하는 기능인가?? 구글링하니까 페이지를 새로고침 막는다는데 없다면 아래 함수가 실행 안되나?? 컨솔찍으면 안찍힘...
        //<Redirect to='/' />                       //주소창에도 ?가 나옴
        this.props.btsStart();  
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                   <input ref={this.inputRef} className={styles.text} type="text" placeholder="Search"></input>
                   <button className={styles.button}><img className={styles.img}src={"/search.png"}/></button>
                </form>
            </React.Fragment>
        );
    }
}

export default Inputform;