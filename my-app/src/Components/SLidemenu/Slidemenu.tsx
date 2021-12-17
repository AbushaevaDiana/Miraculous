import '../../App.css';
import styles from './Slidemenu.module.css';
import React, { Component } from 'react';
import { Slide } from '../../../../types';
import { SlideView } from '../Slide/Slide';
import { isPropertySignature } from 'typescript';


interface SlidemenuList {
    slidelist: Array<Slide>
}

export function Slidemenu(props: SlidemenuList){
        return (
            <>  
               <div className={styles.slidemenu}>
               <ul className={styles.slidemenuList}> 
                 {props.slidelist.map(slide => <SlideView slide = {slide}></SlideView>)}
               </ul>
                   <div className={styles.imglogo}></div>
               </div>
            </>
        )
};