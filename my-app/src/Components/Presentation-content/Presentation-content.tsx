import '../../App.css';
import styles from './Presentation-content.module.css';
import { connect } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';

export function PresentationContent(){
        return (
            <>
                <div className = {styles.presentationContent}>
                  {/* <div className="presentationContentMain"></div>  */}
                </div>
            </>
        )
};