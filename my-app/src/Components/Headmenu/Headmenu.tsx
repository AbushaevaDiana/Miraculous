import '../../App.css';
import styles from './Headmenu.module.css';
import  BasicBtns  from '../Basic-btns/Basic-btns';
import ElementPanel from '../ElementPanel/ElementPanel';
import InsertPanel from '../InsertPanel/InsertPanel';
import MainPanel from '../MainPanel/MainPanel';
import { connect } from 'react-redux';
import {useState } from 'react';
import { addSlide, deleteSlide, editSLideBackgroundColor } from '../../store/actionsCreators/slideActionCreators';
import { changePresentationNAME } from '../../store/actionsCreators/nameActionCreators';
import { Presentation, PresentationMaker, SelectionType } from '../../types';
import { savePresentation, openPresentation, exportPresentation } from '../../store/actionsCreators/presentationActionCreators';
import { addText, deleteElement, addPicture, addRectangle, addRound, addTriangle} from '../../store/actionsCreators/elementActionCreators';
import { changeMode } from '../../store/actionsCreators/modeActionCreators'
import store from '../../store/store';
import { addToHistory} from '../../store/actionsCreators/historyActionCreators';
import { loadFile } from '../../functions/openPresentationFunction';

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
    exportPresentation: () => void,
    changePresentationNAME: (name: string) => void,
    editSLideBackgroundColor: (idSlides: Number[], newBackground: string) => void,
    addPicture: (src: string) => void,
    changeMode: () => void,
    addToHistory: (presentation: Presentation, selection: SelectionType) => void,
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
    if(props.name === ''){
        props.changePresentationNAME('?????????????????????? ?????? ????????????????')
    }
    return (
            <>
            <span className={styles.headmenuName}>             
                <p className = {styles.headtext} onClick={handleToggleNameInput} >
                    ?????????????????????? Miraculous:  
                </p>
                {nameInputVisible ? ( <input type="text" className={styles.headmenuInput} defaultValue={props.name} 
                    onKeyPress = {
                    (e) => {if (e.key === "Enter") {
                    e.currentTarget.value = (props.name == '') ? '?????????????????????? ?????? ????????????????' : e.currentTarget.value
                    props.changePresentationNAME(e.currentTarget.value)
                    e.currentTarget.blur(); 
                    props.addToHistory(store.getState().presentation, store.getState().selection)
                    handleToggleNameInput()
                }}}/> ) : (<p className={styles.headmenuInput}>{props.name}</p>)}

            </span> 
                <ul className={styles.headmenu}>
                    <li className= {styles.headmenuLi}>????????
                        <ul className={styles.submenu}>
                            <li onClick = {() => props.changeMode()}>????????????????????????</li>
                            <li onClick = {() => props.exportPresentation()}>?????????????? ?? pdf</li>
                            <li onClick={() => props.savePresentation()}>?????????????????? ?? json</li>
                            <li onClick = {() => loadFile((object) => {props.openPresentation(object)})}>?????????????????? ???? ??????????</li>
                        </ul>
                    </li>
                    <li className={styles.headmenuLi} onClick={handleToggleMainPanel}>??????????????</li>
                    <li className={styles.headmenuLi} onClick={handleToggleInsertPanel}>????????????????</li>
                    <li className={styles.headmenuLi} onClick={handleToggleElementPanel}>??????????????</li>
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
    changeMode,
    addToHistory,
    exportPresentation,
}

const mapStateToProps = (state: PresentationMaker) => ({
  name: state.presentation.name,
})

export default connect(mapStateToProps, mapDispatchToProps)(Headmenu)