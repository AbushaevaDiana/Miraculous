import '../../App.css';
import styles from './Slide.module.css';
import { Slide } from '../../types';
import { connect } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';



interface SLideProps{
   slide: Slide,
};


export function SlideView(props:SLideProps){
   return (
      <div key={props.slide.idSlide} className={styles.slidemenuListSlide}>
      </div>
   )

};