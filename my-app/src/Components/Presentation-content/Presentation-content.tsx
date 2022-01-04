import '../../App.css';
import styles from './Presentation-content.module.css';
import { connect } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import { PresentationMaker, Slide } from '../../types';

interface PropsPresentationContent{
  slidelist: Slide[],
}

function PresentationContent(props: PropsPresentationContent){
    let mainSlide: Slide = props.slidelist[0];
    for(let i = 0; i < props.slidelist.length; i++ ){
      if(props.slidelist[i].selected === true){
        mainSlide = props.slidelist[i];
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
                {/* <div className="presentationContentMain"></div>  */}
            </div>
        </>
    )
};

//
function mapStateToProps(state: PresentationMaker) {
  return{slidelist: state.presentation.slidelist}
};

const mapDispatchToProps = {
}

export default connect(mapStateToProps)(PresentationContent);
//