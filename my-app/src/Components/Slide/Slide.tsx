import '../../App.css';
import styles from './Slide.module.css';
import { PresentationMaker, SelectionType, Slide, Color } from '../../types';
import { connect } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import { addSlide, deleteSlide, gotoSlide } from '../../store/actionsCreators/slideActionCreators'

interface SLideProps{
   slide: Slide,
   gotoSlide: (idSlide: Number) => void,
   selection: SelectionType,
   index: Number,
};



export function SlideView(props:SLideProps){    
   let privet = styles.slidemenuListSlide;
   let borderCol: string = 'none';
   let back: string = '';
   if(props.slide.background.type === 'img'){
     back = 'url(' + props.slide.background.src + ') no-repeat center'
     if(props.slide.selected === true){
      borderCol = '#000'
   } else {borderCol = ''}
   }
   if(props.slide.background.type === 'color'){
      back = props.slide.background.color
      if(props.slide.selected === true){
         borderCol = '#000'
      } else {borderCol = props.slide.background.color}
   }
   const sLideStyle = {
      background: back,
      borderColor: borderCol,
      backgroundSize: 'contain'
    };

   console.log(props.slide.background)
      return (
         <>
                <p className={styles.slidemenuListSlideIndex}>{props.index}</p>
                <div key={props.slide.idSlide} style={sLideStyle} className={privet} onClick={() => {props.gotoSlide(props.slide.idSlide)}}>
                </div>
         </>
      )
};

//
function mapStateToProps(state: PresentationMaker) {
   return{selection: state.selection}
};

const mapDispatchToProps = {
   gotoSlide
}

export default connect(mapStateToProps)(SlideView);
//