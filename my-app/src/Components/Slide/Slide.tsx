import '../../App.css';
import styles from './Slidemenu.module.css';
import React, { Component } from 'react';


function Slide(){
        return (
            <>  
                <ul className={styles.slidemenuList}>
                    <li className={styles.slidemenuListSlide}></li>
                    <li className={styles.slidemenuListSlide}></li>
                    <li className={styles.slidemenuListSlide}></li>
                    <li className={styles.slidemenuListSlide}></li>
                    <li className={styles.slidemenuListSlide}></li>
                </ul>
            </>
        )
};

export {Slide}