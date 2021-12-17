import '../../App.css';
import styles from './Slidemenu.module.css';
import React, { Component } from 'react';

interface SLideProps{
   slide: SLide,
};

function Slide(props:SLideProps){
        return (
            <>  
                props.slide.elementlist
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