import './App.css';
import styles from './Presentation-content.module.css';
import React, { Component } from 'react';

export default class PresentationContent extends Component {
    render() {
        return (
            <>
                <div className = {styles.presentationContent}>
                  {/* <div className="presentationContentMain"></div>  */}
                </div>
            </>
        )
    }
};