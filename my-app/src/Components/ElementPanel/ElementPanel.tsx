import '../../App.css';
import styles from './ElementPanel.module.css';
import { connect } from 'react-redux';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Presentation, PresentationMaker, SelectionType } from '../../types';
import store from '../../store/store';
import { addToHistory} from '../../store/actionsCreators/historyActionCreators';
import { deleteElement, changeFillColor, changeLineColor, changeTextColor, changeElementWeigth,
 changeElementHeigth, moveElementX, moveElementY, setImageFilter, changeTextSize,
changeTextFont, setTextBold, setTextItalic, setTextUnderline} from '../../store/actionsCreators/elementActionCreators';

interface ElementPanelProps {
    deleteElement: (selection: SelectionType) => void,
    selection: SelectionType,
    changeTextColor: (selection: SelectionType, color: string) => void,
    changeTextFont: (selection: SelectionType, font: string) => void,
    changeTextSize: (selection: SelectionType, size: number) => void,
    changeElementWeigth: (selection: SelectionType, w: number) => void,
    changeElementHeigth: (selection: SelectionType, h: number) => void,
    moveElementY: (selection: SelectionType, y: number) => void,
    moveElementX: (selection: SelectionType, x: number) => void,
    changeLineColor: (selection: SelectionType, color: string) => void,
    changeFillColor: (selection: SelectionType, color: string) => void,
    addToHistory: (presentation: Presentation, selection: SelectionType) => void,
    setImageFilter: (selection: SelectionType, filter: string) => void,
    setTextBold: (selection: SelectionType) => void,
    setTextItalic: (selection: SelectionType) => void,
    setTextUnderline: (selection: SelectionType) => void,
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
                    <div className={styles.fontContainerSettings +  ' ' + styles.fontSettings}>
                        <div className={styles.fontSettingsSelect +  ' ' + styles.fontSelect}>
                            {/* <select className={styles.fontSelectField +  ' ' + styles.selectField}
                            onClick = {(e) => {props.changeTextFont(props.selection, e.currentTarget.value);
                                props.addToHistory(store.getState().presentation, store.getState().selection)}}>
                                <option className={styles.selectFieldOption}>Roboto</option>
                                <option className={styles.selectFieldOption}>Times New Roman</option>
                                <option className={styles.selectFieldOption}>Lobster</option>
                                <option className={styles.selectFieldOption}>Pacifico</option>
                                <option className={styles.selectFieldOption}>Caveat</option>
                                <option className={styles.selectFieldOption}>Comforter Brush</option>
                                <option className={styles.selectFieldOption}>Play</option>
                                <option className={styles.selectFieldOption}>Alegreya</option>
                                <option className={styles.selectFieldOption}>Montserrat Alternates</option>
                                <option className={styles.selectFieldOption}>Pangolin</option>
                            </select> */}
                            <ul className={styles.headmenu}>
                                <li className={styles.headmenuLi}>Шрифт
                                    <ul className={styles.submenu}>
                                        <li onClick = {() => {props.changeTextFont(props.selection, 'Roboto');
                                            props.addToHistory(store.getState().presentation, store.getState().selection)}}>Roboto</li>
                                        <li onClick = {() => {props.changeTextFont(props.selection, 'Times New Roman');
                                            props.addToHistory(store.getState().presentation, store.getState().selection)}}>Times New Roman</li>
                                        <li onClick = {() => {props.changeTextFont(props.selection, 'Lobster');
                                            props.addToHistory(store.getState().presentation, store.getState().selection)}}>Lobster</li>
                                        <li onClick = {() => {props.changeTextFont(props.selection, 'Pacifico');
                                            props.addToHistory(store.getState().presentation, store.getState().selection)}}>Pacifico</li>
                                        <li onClick = {() => {props.changeTextFont(props.selection, 'Caveat');
                                            props.addToHistory(store.getState().presentation, store.getState().selection)}}>Caveat</li>
                                        <li onClick = {() => {props.changeTextFont(props.selection, 'Comforter Brush');
                                            props.addToHistory(store.getState().presentation, store.getState().selection)}}>Comforter Brush</li>
                                        <li onClick = {() => {props.changeTextFont(props.selection, 'Play');
                                            props.addToHistory(store.getState().presentation, store.getState().selection)}}>Play</li>
                                        <li onClick = {() => {props.changeTextFont(props.selection, 'Alegreya');
                                            props.addToHistory(store.getState().presentation, store.getState().selection)}}>Alegreya</li>
                                        <li onClick = {() => {props.changeTextFont(props.selection, 'Montserrat Alternates');
                                            props.addToHistory(store.getState().presentation, store.getState().selection)}}>Montserrat Alternates</li>
                                        <li onClick = {() => {props.changeTextFont(props.selection, 'Pangolin');
                                            props.addToHistory(store.getState().presentation, store.getState().selection)}}>Pangolin</li>
                                    </ul>
                                </li>
                            </ul>
                            <input placeholder='Размер шрифта' type="number" 
                            id="tentacles" name="tentacles" min="0" 
                            className={styles.selectField + ' ' + styles.fontSelectField}
                            onChange = {(e) => 
                            {props.changeTextSize(props.selection, Number(e.currentTarget.value));
                             props.addToHistory(store.getState().presentation, store.getState().selection)}}></input>
                        </div>
                        <div className={styles.fontSettingsMark +  ' ' + styles.fontMark}>
                            <div className={styles.fontMarkIcon}>
                                <button className={styles.bold + ' ' + styles.fontMarkIconButton}
                                onClick = {() => {
                                    props.setTextBold(props.selection);
                                    props.addToHistory(store.getState().presentation, store.getState().selection)}}>А</button>
                            </div> 
                            <div className={styles.fontMarkIcon}>
                                <button className={styles.italic + ' ' + styles.fontMarkIconButton}
                                onClick = {() => {
                                    props.setTextItalic(props.selection);
                                    props.addToHistory(store.getState().presentation, store.getState().selection)}}>А</button>
                            </div>
                            <div className={styles.fontMarkIcon}>
                                <button className={styles.underlined + ' ' + styles.fontMarkIconButton}
                                onClick = {() => {
                                    props.setTextUnderline(props.selection);
                                    props.addToHistory(store.getState().presentation, store.getState().selection)}}>А</button>
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
                    <ul className={styles.headmenu  + ' ' + styles.headmenuFilters}>
                        <li className={styles.headmenuLi + ' ' + styles.headmenuLiFilters}>Фильтры
                            <ul className={styles.submenuFilters}>
                                <li onClick = {() => {
                                    props.setImageFilter(props.selection, 'black-white');
                                    props.addToHistory(store.getState().presentation, store.getState().selection);
                                }}>черно-белый</li>
                                <li onClick = {() => {
                                    props.setImageFilter(props.selection, 'none');
                                    props.addToHistory(store.getState().presentation, store.getState().selection);
                                }}>без фильтров</li>
                                <li onClick = {() => {
                                    props.setImageFilter(props.selection, 'negative');
                                    props.addToHistory(store.getState().presentation, store.getState().selection);
                                }}>негатив</li>
                            </ul>
                        </li>
                    </ul>
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
    changeTextSize,
    changeTextFont,
    setTextBold,
    setTextItalic,
    setTextUnderline,
})
  
function mapStateToProps(state: PresentationMaker) {
    return { selection: state.selection} 
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ElementPanel)