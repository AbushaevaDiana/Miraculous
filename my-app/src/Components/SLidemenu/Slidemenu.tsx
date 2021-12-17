import '../../App.css';
import styles from './Slidemenu.module.css';
import React, { Component } from 'react';
import { Slide } from '../../../../types';

interface slidemenuList {
    slidelist: Array<Slide>
}

export function Slidemenu(props: slidemenuList){
        return (
            <>  
               <div className={styles.slidemenu}>
                
               <ul className={styles.slidemenuList}>
                 {props.slidelist.map(slide => <li key={slide.idSlide} className={styles.slidemenuListSlide}></li>)}
               </ul>
                   <div className={styles.imglogo}></div>
               </div>
            </>
        )
};