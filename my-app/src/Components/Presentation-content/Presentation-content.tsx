import '../../App.css';
import styles from './Presentation-content.module.css';
import { connect } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import { Position, PresentationMaker, SelectionType, Slide } from '../../types';
import Element from '../Element/Element'
import { changeTextContent, moveElement } from '../../store/actionsCreators/elementActionCreators'

interface PropsPresentationContent{
  slidelist: Slide[],
  changeTextContent: (selection: SelectionType, content: string) => void,
  moveElement: (selection: SelectionType, position: Position) => void,
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
          <div className={styles.presentationContentEmpty}>
              <div className={styles.presentationContentText}>Упс! Слайдов нет.</div>
              <div className={styles.presentationContentImg}></div>
          </div>
        </>
      )
    }
};

//
function mapStateToProps(state: PresentationMaker) {
  return{slidelist: state.presentation.slidelist}
};

const mapDispatchToProps = {
  moveElement,
  changeTextContent,
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentationContent);
//