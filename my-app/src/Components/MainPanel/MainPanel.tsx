import '../../App.css';
import styles from './MainPanel.module.css';
import { connect } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';


export function MainPanel() {
    return (
        <>
            <div className={styles.slideBackgroundContainer}>
                <div className={styles.backgroundImage}>
                    <div className={styles.slideBackgroundInscr}></div>
                </div>
                <div className={styles.backgroundColor}></div>
            </div>
            <div className={styles.elementOutlineContainer}></div>
        </>
    )
}