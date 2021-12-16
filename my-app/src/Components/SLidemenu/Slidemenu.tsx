import './App.css';
import styles from './Slidemenu.module.css';
import React, { Component } from 'react';

function Slidemenu(){
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