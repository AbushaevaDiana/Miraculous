import '../../App.css';
import styles from './Basic-btns.module.css';
import React, { Component } from 'react';
import { addSlide, deleteSlide, gotoSlide } from '../../store/actionsCreators/slideActionCreators';
import { Presentation, PresentationMaker } from '../../types';
import { connect } from 'react-redux';

interface BasicBtnsProps {
    addSlide: () => void,
}

function BasicBtns(props: BasicBtnsProps){
        return ( 
            <>
                <div className={styles.slideBtnContainer}>
                    <div className={styles.slideBtn} onClick={() => {props.addSlide()}}>   
                        <div className={styles.slideBtnImg + ' ' + styles.newSlideBtnImg} id='newSlideBtnImg'></div>
                        <p className={styles.slideBtnInscr + ' ' + styles.toolInsc}>Новый слайд</p> 
                    </div>
                    <div className={styles.slideBtn}>   
                        <div className={styles.slideBtnImg + ' ' + styles.deleteSlideBtnImg} id='deleteSlideBtnImg'></div>
                        <p className={styles.slideBtnInscr + ' ' + styles.toolInsc}>Удалить слайд</p> 
                    </div>
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
};

const mapDispatchToProps = ({
    addSlide,
})
  
function mapStateToProps(state: PresentationMaker) {
    return { slidelist: state.presentation.slidelist } 
}
  
export default connect(mapStateToProps, mapDispatchToProps)(BasicBtns)