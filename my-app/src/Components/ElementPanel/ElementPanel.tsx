import '../../App.css';
import styles from './ElementPanel.module.css';
import { connect } from 'react-redux';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Presentation, PresentationMaker, SelectionType } from '../../types';
import store from '../../store/store';
import { addToHistory} from '../../store/actionsCreators/historyActionCreators';
import { deleteElement, changeFillColor, changeLineColor, changeTextColor, changeElementWeigth,
 changeElementHeigth, moveElementX, moveElementY, setImageFilter} from '../../store/actionsCreators/elementActionCreators';

interface ElementPanelProps {
    deleteElement: (selection: SelectionType) => void,
    selection: SelectionType,
    changeTextColor: (selection: SelectionType, color: string) => void,
    changeElementWeigth: (selection: SelectionType, w: number) => void,
    changeElementHeigth: (selection: SelectionType, h: number) => void,
    moveElementY: (selection: SelectionType, y: number) => void,
    moveElementX: (selection: SelectionType, x: number) => void,
    changeLineColor: (selection: SelectionType, color: string) => void,
    changeFillColor: (selection: SelectionType, color: string) => void,
    addToHistory: (presentation: Presentation, selection: SelectionType) => void,
    setImageFilter: (selection: SelectionType, filter: string) => void,
}

export function ElementPanel(props: ElementPanelProps) {
    const hanglerOnChangeLine = (event: ChangeEvent<HTMLInputElement>) => {
        const inputColor = event.target as HTMLInputElement
        const inputColorStr = String(inputColor.value);
        console.log('цвет', inputColorStr);
        props.changeLineColor(props.selection, inputColorStr);
        props.addToHistory(store.getState().presentation, store.getState().selection);
        
    }
    const hanglerOnChangeFill = (event: ChangeEvent<HTMLInputElement>) => {
        const inputColor = event.target as HTMLInputElement
        const inputColorStr = String(inputColor.value)
        console.log('цвет', inputColorStr)
        props.changeFillColor(props.selection, inputColorStr);
        props.addToHistory(store.getState().presentation, store.getState().selection);
    }
    const hanglerOnChangeText = (event: ChangeEvent<HTMLInputElement>) => {
        const inputColor = event.target as HTMLInputElement
        const inputColorStr = String(inputColor.value)
        console.log('цвет', inputColorStr)
        props.changeTextColor(props.selection, inputColorStr);
        props.addToHistory(store.getState().presentation, store.getState().selection);
    }
    const hanglerOnChangeWidth = (event: ChangeEvent<HTMLInputElement>) => {
        const inputWidth = event.target as HTMLInputElement
        const inputWidthNumer = Number(inputWidth.value);
        props.changeElementWeigth(props.selection, inputWidthNumer);
        props.addToHistory(store.getState().presentation, store.getState().selection);
    }
    const hanglerOnChangeHeigth = (event: ChangeEvent<HTMLInputElement>) => {
        const inputWidth = event.target as HTMLInputElement
        const inputWidthNumer = Number(inputWidth.value);
        props.changeElementHeigth(props.selection, inputWidthNumer);
        props.addToHistory(store.getState().presentation, store.getState().selection);
    }
    const hanglerOnChangeY = (event: ChangeEvent<HTMLInputElement>) => {
        const inputWidth = event.target as HTMLInputElement
        const inputWidthNumer = Number(inputWidth.value);
        props.moveElementY(props.selection, inputWidthNumer);
        props.addToHistory(store.getState().presentation, store.getState().selection);
    }
    const hanglerOnChangeX = (event: ChangeEvent<HTMLInputElement>) => {
        const inputWidth = event.target as HTMLInputElement
        const inputWidthNumer = Number(inputWidth.value);
        props.moveElementX(props.selection, inputWidthNumer);
        props.addToHistory(store.getState().presentation, store.getState().selection);
    }
    
        return (
            <>
                <div className={styles.toolbarFont + ' ' +styles.fontContainer}>
                    <div className={styles.fontContainerBtn + ' ' + styles.fontBtn}>
                        <div className={styles.fontBtnImg}></div>
                        <p className={styles.fontBtnInsc +  ' ' + styles.toolInsc}>Шрифт</p>
                    </div>
                    <div className={styles.fontContainerSettings +  ' ' + styles.fontSettings}>
                        <div className={styles.fontSettingsSelect +  ' ' + styles.fontSelect}>
                            <select className={styles.fontSelectField +  ' ' + styles.selectField}>
                                <option className={styles.selectFieldOption}>Roboto</option>
                                <option className={styles.selectFieldOption}>Open Sans</option>
                                <option className={styles.selectFieldOption}>Praise</option>
                            </select>
                            <input placeholder='Размер шрифта' type="number" id="tentacles" name="tentacles" min="0" className={styles.selectField + ' ' + styles.fontSelectField}></input>
                        </div>
                        <div className={styles.fontSettingsMark +  ' ' + styles.fontMark}>
                            <div className={styles.fontMarkIcon}>
                                <button className={styles.bold + ' ' + styles.fontMarkIconButton}>А</button>
                            </div> 
                            <div className={styles.fontMarkIcon}>
                                <button className={styles.italic + ' ' + styles.fontMarkIconButton}>А</button>
                            </div>
                            <div className={styles.fontMarkIcon}>
                                <button className={styles.underlined + ' ' + styles.fontMarkIconButton}>А</button>
                            </div>
                            <div className={styles.fontMarkIcon}>
                                <button className={styles.selectColor + ' ' + styles.fontMarkIconButton}>А</button>
                                <input type="color"id="textColor" onChange = {hanglerOnChangeText}
                                className= {styles.elementSettingsSelect + ' ' + styles.selectField} defaultValue='#F08080'>
                                </input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.toolbarSelectContainer + ' ' + styles.elementSettings}>
                    <div className={styles.elementSettingsImg + ' ' + styles.filterIcon}></div>
                    <ul className={styles.headmenu}>
                        <li className={styles.headmenuLi}>Фильтры
                            <ul className={styles.submenu}>
                                <li>черно-белый</li>
                                <li>красный</li>
                            </ul>
                        </li>
                    </ul>


                    {/* <select className={styles.elementSettingsSelect + ' ' + styles.selectField}>
                        <option className={styles.selectFieldOption}>Фильтры</option>
                        <option className={styles.selectFieldOption}>черно-белый</option>
                        <option className={styles.selectFieldOption}>красный</option>
                    </select> */}
                </div>
                <div className={styles.toolbarSelectContainer + ' ' +styles.elementSettings}>
                    <div className={styles.elementSettingsImg + ' ' + styles.contourIcon}></div>
                    <input type="color"id="borderColor" onChange = {hanglerOnChangeLine}
                    className= {styles.elementSettingsSelect + ' ' + styles.selectField} defaultValue='#F08080'>
                    </input>
                </div>
                <div className={styles.toolbarSelectContainer + ' ' +styles.elementSettings}>
                    <div className={styles.elementSettingsImg + ' ' + styles.fillIcon}></div>
                    <input type="color"id="fillColor" onChange = {hanglerOnChangeFill}
                    className= {styles.elementSettingsSelect + ' ' + styles.selectField}
                     defaultValue='#F08080'>
                    </input>
                </div>

                <div className={styles.toolbarSelectContainer + ' ' + styles.elementSettings + ' ' + styles.resizeAndMove}>
                    <div className={styles.resizeContainer}>
                        <div className={styles.resizeInputContainer}>
                            <span className={styles.resizeInscr}>Ширина:</span>
                            <input type="number" id="tentacles" name="tentacles" min="0" onChange = {hanglerOnChangeWidth}
                             className={styles.resizeInput}></input>
                        </div>
                        <div className={styles.resizeInputContainer}>
                            <span className={styles.resizeInscr}>Высота:</span>
                            <input type="number" id="tentacles" name="tentacles" min="0" onChange = {hanglerOnChangeHeigth}
                             className={styles.resizeInput}></input>
                        </div>
                    </div>
                    <div className={styles.resizeContainer}>
                        <div className={styles.resizeInputContainer}>
                            <span className={styles.resizeInscr}>x:</span>
                            <input type="number" id="tentacles" name="tentacles" min="0"  onChange = {hanglerOnChangeX}
                             className={styles.resizeInput}></input>
                        </div>
                        <div className={styles.resizeInputContainer}>
                            <span className={styles.resizeInscr}>y:</span>
                            <input type="number" id="tentacles" name="tentacles" min="0" onChange = {hanglerOnChangeY}
                            className={styles.resizeInput}></input>
                        </div> 
                    </div>
                </div>


                <div className={styles.deleteElementContainer} 
                onClick = {() => {props.deleteElement(props.selection);
                props.addToHistory(store.getState().presentation, store.getState().selection);}}>   
                    <div className={styles.deleteElementIcon}></div>
                    <p className={styles.deleteElementInscr}>Удалить элемент</p> 
                </div>
            </>
        )
}

const mapDispatchToProps = ({
    deleteElement,
    changeTextColor,
    changeLineColor,
    changeFillColor,
    moveElementY,
    moveElementX,
    changeElementWeigth,
    changeElementHeigth,
    addToHistory,
    setImageFilter,
})
  
function mapStateToProps(state: PresentationMaker) {
    return { selection: state.selection} 
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ElementPanel)