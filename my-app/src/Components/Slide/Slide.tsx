import '../../App.css';
import styles from './Slide.module.css';
import React, { Component } from 'react';
import { Slide } from '../../../../types';



interface SLideProps{
   slide: Slide,
};


export function SlideView(props:SLideProps){
   return (
      <div key={props.slide.idSlide} className={styles.slidemenuListSlide}>
      </div>
   )

};