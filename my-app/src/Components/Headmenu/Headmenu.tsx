import '../../App.css';
import styles from './Headmenu.module.css';
import  BasicBtns  from '../Basic-btns/Basic-btns';
import ElementPanel from '../ElementPanel/ElementPanel';
import InsertPanel from '../InsertPanel/InsertPanel';
import MainPanel from '../MainPanel/MainPanel';
import { connect } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import { addSlide, deleteSlide, editSLideBackgroundColor } from '../../store/actionsCreators/slideActionCreators';
import { changePresentationNAME } from '../../store/actionsCreators/nameActionCreators';
import { Presentation, PresentationMaker, SelectionType } from '../../types';
import { savePresentation, openPresentation } from '../../store/actionsCreators/presentationActionCreators';
import { addText, deleteElement, addPicture, addRectangle, addRound, addTriangle} from '../../store/actionsCreators/elementActionCreators';
import {loadFile} from '../../store/reducers/presentationReduser'

interface HeadmenuProps {
    name: string,
    addText: () => void,
    addRound: () => void,
    addTriangle: () => void,
    addRectangle: () => void,
    deleteElement: (selection: SelectionType) => void,
    addSlide: () => void,
    deleteSlide: (idSlide: Number[]) => void,
    savePresentation: () => void,
    openPresentation: (newPresentation: Presentation) => void,
    changePresentationNAME: (name: string) => void,
    editSLideBackgroundColor: (idSlides: Number[], newBackground: string) => void,
    addPicture: (src: string) => void,
}

export function Headmenu(props: HeadmenuProps) {
    const [mainPanelVisible, setMainPanelVisible] = useState(true);
    const handleToggleMainPanel = () => {
        setMainPanelVisible(true);
        setInsertPanelVisible(false);
        setElementPanelVisible(false);
    };
    const [insertPanelVisible, setInsertPanelVisible] = useState(false);
    const handleToggleInsertPanel = () => {
        setInsertPanelVisible(true);
        setMainPanelVisible(false);
        setElementPanelVisible(false);
    };
    const [elementPanelVisible, setElementPanelVisible] = useState(false);
    const handleToggleElementPanel = () => {
        setElementPanelVisible(true);
        setMainPanelVisible(false);
        setInsertPanelVisible(false);
    };

    const [nameInputVisible, setNameInputVisible] = useState(false);
    const handleToggleNameInput = () => {
        setNameInputVisible(!nameInputVisible)
    }
    console.log(props.name);
     
    return (
            <>
            <span className={styles.headmenuName}>             
                <p className = {styles.headtext} onClick = {handleToggleNameInput}>
                    Презентация Miraculous:  
                </p>
                <input type="text" className={styles.headmenuInput} defaultValue={props.name} 
                    onKeyPress= {
                    (e) => {if (e.key === "Enter") {
                    e.currentTarget.value = (e.currentTarget.value == '') ? 'Презентация без названия' : e.currentTarget.value
                    props.changePresentationNAME(e.currentTarget.value)
                    e.currentTarget.blur()
                }}}/>
            </span> 
                <ul className={styles.headmenu}>
                    <li className= {styles.headmenuLi}>Файл
                        <ul className={styles.submenu}>
                            <li>Предпросмотр</li>
                            <li>Сохранить в pdf</li>
                            <li onClick={() => props.savePresentation()}>Сохранить в json</li>
                            <li onClick = {() => loadFile((object) => {props.openPresentation(object)})}>Загрузить из файла</li>
                        </ul>
                    </li>
                    <li className={styles.headmenuLi} onClick={handleToggleMainPanel}>Главная</li>
                    <li className={styles.headmenuLi} onClick={handleToggleInsertPanel}>Вставить</li>
                    <li className={styles.headmenuLi} onClick={handleToggleElementPanel}>Элемент</li>
                </ul>
                <div className = {styles.toolbar}>
                    <BasicBtns />
                    {mainPanelVisible ? (<MainPanel></MainPanel> ) : (null)}
                    {insertPanelVisible ? (<InsertPanel></InsertPanel> ) : (null)}
                    {elementPanelVisible ? (<ElementPanel></ElementPanel> ) : (null)} 
                </div>
            </>
        )
};

const mapDispatchToProps = {
    addSlide,
    deleteSlide,
    changePresentationNAME,
    editSLideBackgroundColor,
    addText,
    deleteElement,
    addPicture,
    addRectangle,
    addRound,
    addTriangle,
    savePresentation,
    openPresentation,
}

const mapStateToProps = (state: PresentationMaker) => ({
  name: state.presentation.name,
})

export default connect(mapStateToProps, mapDispatchToProps)(Headmenu)