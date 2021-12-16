import './App.css';
import styles from './Slidemenu.module.css';
import React, { Component } from 'react';

export default class Slidemenu extends Component {
    render() {
        return (
            <>  
               <div className={styles.slidemenu}>
                   <ul className={styles.slidemenuList}>
                       <li className={styles.slidemenuListSlide}></li>
                       <li className={styles.slidemenuListSlide}></li>
                       <li className={styles.slidemenuListSlide}></li>
                       <li className={styles.slidemenuListSlide}></li>
                       <li className={styles.slidemenuListSlide}></li>
                   </ul>
                   <div className={styles.imglogo}></div>
               </div>
            </>
        )
    }
};