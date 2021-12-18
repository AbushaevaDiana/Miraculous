import '../../App.css';
import styles from './Presentation-content.module.css';
import { connect } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import { Slide } from '../../types';

interface PropsPresentationContent{
  slide: Slide,
}

export function PresentationContent(props: PropsPresentationContent){
        return (
            <>
                <div key={props.slide.idSlide} className = {styles.presentationContent}>
                  {/* <div className="presentationContentMain"></div>  */}
                </div>
            </>
        )
};