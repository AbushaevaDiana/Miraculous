import '../../App.css';
import styles from './Basic-btns.module.css';
import React, { Component } from 'react';
import { addSlide, deleteSlide, gotoSlide, editSLideBackgroundColor} from '../../store/actionsCreators/slideActionCreators';
import { Editer, History, Presentation, PresentationMaker, SelectionType } from '../../types';
import { connect } from 'react-redux';
import { addToHistory, undoAct, redoAct } from '../../store/actionsCreators/historyActionCreators';
import { undo, redo } from "../../functions/history_function"

interface BasicBtnsProps {
    addSlide: () => void,
    deleteSlide: (idSlide: Number[]) => void,
    selection: SelectionType,
    presentation: Presentation,
    addToHistory: (presentation: Presentation, selection: SelectionType) => void,
    presentationMaker: PresentationMaker,
    undoAct: (presentationMaker: PresentationMaker) => void,
    redoAct: (presentationMaker: PresentationMaker) => void,
}

function BasicBtns(props: BasicBtnsProps){
        return ( 
            <>
                <div className={styles.slideBtnContainer}>
                    <div className={styles.slideBtn} onClick={() => {props.addSlide(); props.addToHistory(props.presentation, props.selection)}}>   
                        <div className={styles.slideBtnImg + ' ' + styles.newSlideBtnImg} id='newSlideBtnImg'></div>
                        <p className={styles.slideBtnInscr + ' ' + styles.toolInsc}>Новый слайд</p> 
                    </div>
                    <div className={styles.slideBtn} onClick={() => {props.deleteSlide(props.selection.idSlides); props.addToHistory(props.presentation, props.selection)}}>   
                        <div className={styles.slideBtnImg + ' ' + styles.deleteSlideBtnImg} id='deleteSlideBtnImg'></div>
                        <p className={styles.slideBtnInscr + ' ' + styles.toolInsc}>Удалить слайд</p> 
                    </div>
                </div>
                <div className={styles.toolbarCancelRefund + ' ' +styles.cancelRefundBtn}>
                    <div className= {styles.cancelRefundBtnContainer + ' ' +styles.doRedoBtn} onClick = {() => props.undoAct(undo(props.presentationMaker))}>
                        <div className={styles.doRedoBtnArrow + ' ' + styles.arrowLeft}></div>
                        <p className={styles.doRedoBtnInsc + ' ' + styles.toolInsc}>Отмена</p>
                    </div>
                    <div className={styles.cancelRefundBtnContainer + ' ' +styles.doRedoBtn} onClick = {() => props.redoAct(redo(props.presentationMaker))}>
                    <div className={styles.doRedoBtnArrow + ' ' + styles.arrowRight}></div>
                        <p className={styles.doRedoBtnInsc + ' ' + styles.toolInsc}>Возврат</p>
                    </div>
                </div>
            </>
        )
};

const mapDispatchToProps = ({
    addSlide,
    deleteSlide,
    addToHistory,
    undoAct,
    redoAct,
})
  
function mapStateToProps(state: PresentationMaker) {
    return {selection: state.selection, presentation: state.presentation, presentationMaker: state} 
}
  
export default connect(mapStateToProps, mapDispatchToProps)(BasicBtns)