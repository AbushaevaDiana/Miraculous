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
};



export function SlideView(props:SLideProps){    
   let privet = styles.slidemenuListSlide;
   let color: string = '';
   let borderCol: string = 'none';
   if(props.slide.background.type === 'color'){
      color = props.slide.background.color
      if(props.slide.background.color !== '#FFFFFF'){
         borderCol = '#000'
      } else {borderCol = props.slide.background.color}
   }
   const sLideStyle = {
      background: color,
      borderColor: borderCol,
    };

   console.log(props.slide.background)
      return (
         <div key={props.slide.idSlide} style={sLideStyle} className={privet} onClick={() => {props.gotoSlide(props.slide.idSlide)}}>
         </div>
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