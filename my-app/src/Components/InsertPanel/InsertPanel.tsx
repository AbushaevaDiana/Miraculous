import '../../App.css';
import styles from './InsertPanel.module.css';
import { connect } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import { PresentationMaker, SelectionType } from '../../types';
import { addText, deleteElement} from '../../store/actionsCreators/elementActionCreators';

interface InsertPanelProps {
    addText: () => void,
    selection: SelectionType,
}

export function InsertPanel(props: InsertPanelProps) {
    return (
        <>
            <div className={styles.imageContainer}>
                <div className={styles.imgBlock}>
                    <div className={styles.icon + ' ' + styles.imgIcon}></div>
                    <div className={styles.insc}>Картинку</div>
                </div>
                <input type="text" className={styles.imgInput} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.textBlock} onClick = {() => props.addText()}>
                    <div className={styles.icon + ' ' + styles.textIcon}></div>
                    <div className={styles.insc}>Текст</div>
                </div>
            </div>
            <div className={styles.figureContainer}>
                <div className={styles.figureBlock}>
                    <div className={styles.icon + ' ' + styles.figureIcon}></div>
                    <div className={styles.insc}>Фигуру</div>
                </div>
                <div className={styles.figureTypeBlock}>
                    <div className={styles.figureTypeIcon + ' ' + styles.triangleIcon}></div>
                </div>
                <div className={styles.figureTypeBlock}>
                    <div className={styles.figureTypeIcon + ' ' + styles.circleIcon}></div>
                </div>
                <div className={styles.figureTypeBlock}>
                    <div className={styles.figureTypeIcon + ' ' + styles.squareIcon}></div>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = ({
    addText,
    deleteElement,
})
  
function mapStateToProps(state: PresentationMaker) {
    return { selection: state.selection} 
}
  
export default connect(mapStateToProps, mapDispatchToProps)(InsertPanel)