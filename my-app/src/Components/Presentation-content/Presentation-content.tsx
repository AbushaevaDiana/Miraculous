import '../../App.css';
import styles from './Presentation-content.module.css';
import { connect } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import { PresentationMaker, Slide } from '../../types';
import Element from '../Element/Element'

interface PropsPresentationContent{
  slidelist: Slide[],
}

function PresentationContent(props: PropsPresentationContent){
    if (props.slidelist.length !== 0) {  
      let mainSlide: Slide = props.slidelist[0];
      for(let i = 0; i < props.slidelist.length; i++ ){
        if(props.slidelist[i].selected === true){
          mainSlide = props.slidelist[i];
          break;
        }
      };
      let color: string = '';
      if(mainSlide.background.type === 'color'){
        color = mainSlide.background.color
      }
      const mainSLideStyle = {
        background: color,
      };    
      console.log('Main slide', mainSlide.idSlide)
      return (
          <>
              <div key={mainSlide.idSlide} style={mainSLideStyle} className = {styles.presentationContent}>
              <ul> 
                 {mainSlide.elementlist.map(element => <Element key = {element.idElement} element = {element}></Element>)}
               </ul>
              </div>
          </>
      )
    } else {
      return (
        <>
          <p>Пусто</p>
        </>
      )
    }
};

//
function mapStateToProps(state: PresentationMaker) {
  return{slidelist: state.presentation.slidelist}
};

const mapDispatchToProps = {
}

export default connect(mapStateToProps)(PresentationContent);
//