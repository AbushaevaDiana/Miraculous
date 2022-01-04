import '../../App.css';
import styles from './Headmenu.module.css';
import  BasicBtns  from '../Basic-btns/Basic-btns';
import { ElementPanel } from '../ElementPanel/ElementPanel';
import { InsertPanel } from '../InsertPanel/InsertPanel';
import MainPanel from '../MainPanel/MainPanel';
import { connect } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import { addSlide, deleteSlide, editSLideBackgroundColor } from '../../store/actionsCreators/slideActionCreators';
import { changePresentationNAME } from '../../store/actionsCreators/nameActionCreators';
import { Presentation, PresentationMaker } from '../../types';


interface HeadmenuProps {
    name: string,
    addSlide: () => void,
    deleteSlide: (idSlide: Number[]) => void,
    changePresentationNAME: (name: string) => void,
    editSLideBackgroundColor: (idSlides: Number[], newBackground: string) => void,
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
                <p className='headtext'onClick = {handleToggleNameInput}>
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
                    <li className= {styles.headmenuLi}>       
                        <button className={styles.headmenuLiButton}>Файл</button>
                    </li>
                    <li className={styles.headmenuLi}>
                        <button className={styles.headmenuLiButton} onClick={handleToggleMainPanel}>Главная</button>
                    </li>
                    <li className={styles.headmenuLi}>
                        <button className={styles.headmenuLiButton} onClick={handleToggleInsertPanel}>Вставить</button>
                    </li>
                    <li className={styles.headmenuLi}>
                        <button className={styles.headmenuLiButton} onClick={handleToggleElementPanel}>Элемент</button>
                    </li>
                </ul>
                <div className = {styles.toolbar}>
                    <BasicBtns />
                    {mainPanelVisible ? (<MainPanel></MainPanel> ) : (null)}
                    {insertPanelVisible ? (<InsertPanel></InsertPanel> ) : (null)}
                    {elementPanelVisible ? (<ElementPanel></ElementPanel> ) : (null)} 
                </div>
            </>
            // </BrowserRouter> 
        )
};

const mapDispatchToProps = {
    addSlide,
    deleteSlide,
    changePresentationNAME,
    editSLideBackgroundColor,
}

const mapStateToProps = (state: PresentationMaker) => ({
  name: state.presentation.name,
})

export default connect(mapStateToProps, mapDispatchToProps)(Headmenu)