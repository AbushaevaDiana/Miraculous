import '../../App.css';
import styles from './Basic-btns.module.css';
import React, { Component } from 'react';
import { addSlide, deleteSlide, gotoSlide } from '../../store/actionsCreators/slideActionCreators';
import { Presentation } from '../../types';
import { connect } from 'react-redux';

interface BasicBtnsProps {
    addSlide: () => void,
}

function BasicBtns(props: BasicBtnsProps){
        return ( 
            <>
                <div className={styles.toolbarNewSlide} onClick={() => {props.addSlide()}}>   
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
};

const mapDispatchToProps = ({
    addSlide,
})
  
  function mapStateToProps(state: Presentation) {
    return { slidelist: state.slidelist } 
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(BasicBtns)