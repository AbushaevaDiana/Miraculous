import '../../App.css';
import styles from './Basic-btns.module.css';
import React, { Component } from 'react';

export default class BasicBtns extends Component {
    render () {
        return (
            <>
                <div className={styles.toolbarNewSlide}>
                    <div className={styles.newSlideBtnImg} id='newSlideBtnImg'></div>
                    <p className={styles.newSlideBtnInsc + ' ' + styles.toolInsc} >Новый слайд</p> 
                </div>
                <div className={styles.toolbarCancelRefund + ' ' +styles.cancelRefundBtn}>
                    <div className= {styles.cancelRefundBtnContainer + ' ' +styles.doRedoBtn}>
                        <div className={styles.doRedoBtnArrow + ' ' + styles.arrowLeft}></div>
                        <p className={styles.doRedoBtnInsc + ' ' + styles.toolInsc}>Отмена</p>
                    </div>
                    <div className={styles.cancelRefundBtnContainer + ' ' +styles.doRedoBtn}>
                    <div className={styles.doRedoBtnArrow + ' ' + styles.arrowRight}></div>
                        <p className={styles.doRedoBtnInsc + ' ' + styles.toolInsc}>Возврат</p>
                    </div>
                </div>
            </>
        )
    }
}