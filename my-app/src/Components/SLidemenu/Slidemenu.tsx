import '../../App.css';
import styles from './Slidemenu.module.css';
import React, { Component } from 'react';
import { Slide } from '../../../../types';

interface slidemenuList {
    slidelist: Array<Slide>
}

function Slidemenu(props: slidemenuList){
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
};

export {Slidemenu}