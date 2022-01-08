import '../../App.css';
import styles from './Preview.module.css';
import { connect } from 'react-redux';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Position, PresentationMaker, SelectionType, Slide } from '../../types';
import MaxElement from '../Element/maxElement'
import { changeMode } from '../../store/actionsCreators/modeActionCreators'
import {gotoSlide } from '../../store/actionsCreators/slideActionCreators'

interface PropsPreview{
    slidelist: Slide[],
    gotoSlide: (idSlide: number) => void,
    selection: SelectionType,
    changeMode: () => void,
}

export function Preview(props: PropsPreview) {
    let i: number = 0;
    let mainSlide: Slide = props.slidelist[i];
    for(i; i < props.slidelist.length; i++ ){
      if(props.slidelist[i].selected === true){
        mainSlide = props.slidelist[i];
        break;
      }
    };
    let back: string = '';
    if(mainSlide.background.type === 'color'){
      back = mainSlide.background.color
    }
    if(mainSlide.background.type === 'img'){
      back = 'url(' + mainSlide.background.src + ') no-repeat center /100% 100%'
    }
    const mainSLideStyle = {
      background: back,
    };
    return (
        <>
            <div className={styles.previewContainer}>
                <div style={mainSLideStyle}  className={styles.previewContent}>
                    <ul> 
                        {mainSlide.elementlist.map(element => <MaxElement key = {element.idElement} element = {element}></MaxElement>)}
                    </ul>
                    <nav className={styles.navigator}>
                      <button className={styles.left + " " + styles.buttons}
                      onClick={() => {
                        if(i > 0){
                        props.gotoSlide(props.slidelist[i-1].idSlide)}
                        }}></button>
                      <button className={styles.right + " " + styles.buttons}
                      onClick={() => {
                        if(i < props.slidelist.length-1){
                        props.gotoSlide(props.slidelist[i+1].idSlide)}
                        }}></button>
                      <button className={styles.end + " " + styles.buttons}
                      onClick = {() => props.changeMode()}></button>
                    </nav>
                </div>
            </div>
        </>
    )
}

//
function mapStateToProps(state: PresentationMaker) {
    return{selection: state.selection, slidelist: state.presentation.slidelist}
  };
  
  const mapDispatchToProps = {
    changeMode,
    gotoSlide,
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Preview);
  //