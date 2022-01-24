import '../../App.css';
import styles from './Slide.module.css';
import { PresentationMaker, SelectionType, Slide, Color, Presentation } from '../../types';
import { connect } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import { addSlide, deleteSlide, gotoSlide, gotoSlides, moveSlide } from '../../store/actionsCreators/slideActionCreators'
import { MiniElement } from '../Element/miniElement'
import store from '../../store/store';
import { addToHistory} from '../../store/actionsCreators/historyActionCreators';
import slidelist from '../../store/reducers/slideReduce';


interface SLideProps{
   slide: Slide,
   gotoSlide: (idSlide: number) => void,
   gotoSlides: (idSlide: number) => void,
   moveSlide: (start: Slide, end: Slide) => void,
   selection: SelectionType,
   index: Number,
   addToHistory: (presentation: Presentation, selection: SelectionType) => void,
};

export function SlideView(props:SLideProps){    
   let privet = styles.slidemenuListSlide;
   let borderCol: string = 'none';
   let back: string = '';
   let dragging: boolean = false;
   if(props.slide.background.type === 'img'){
     back = 'url(' + props.slide.background.src + ') no-repeat center /100% 100%'
     if(props.slide.selected === true){
      borderCol = '#000';
      dragging = true;
   } else {borderCol = ''}
   }
   if(props.slide.background.type === 'color'){
      back = props.slide.background.color
      if(props.slide.selected === true){
         borderCol = '#000';
         dragging = true;
      } else {borderCol = ''}
   }
   const sLideStyle = {
      borderColor: borderCol,
      background: back,
    };

      return (
         <>
                <p className={styles.slidemenuListSlideIndex}>{props.index}</p>
                <div draggable={dragging} key={props.slide.idSlide} style={sLideStyle} className={privet} 
                  onClick={(e) => {
                    if(!e.ctrlKey){
                        props.gotoSlide(props.slide.idSlide);
                     }
                     else{props.gotoSlides(props.slide.idSlide);}
                     props.addToHistory(store.getState().presentation, store.getState().selection);}
                  }>
                  <ul> 
                   {props.slide.elementlist.map(element => <MiniElement key = {element.idElement} element = {element}></MiniElement>)}
                  </ul>
                </div>
         </>
      )
};

//
function mapStateToProps(state: PresentationMaker) {
   return{selection: state.selection}
};

const mapDispatchToProps = {
   gotoSlide,
   addToHistory,
   gotoSlides,
   moveSlide,
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideView);
//