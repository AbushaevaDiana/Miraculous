import '../../App.css';
import styles from './Headmenu.module.css';
import  BasicBtns  from '../Basic-btns/Basic-btns';
import { ElementPanel } from '../ElementPanel/ElementPanel';
import { InsertPanel } from '../InsertPanel/InsertPanel';
import { MainPanel } from '../MainPanel/MainPanel';
import { connect } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import { addSlide, deleteSlide } from '../../store/actionsCreators/slideActionCreators';
import { Presentation, PresentationMaker } from '../../types';


interface HeadmenuProps {
    name: string,
    addSlide: () => void,
    deleteSlide: (idSlide: Number[]) => void
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
        return (
            <>
                <p className='headtext'>
                    Презентация Miraculous: {props.name}
                </p>
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
    deleteSlide
}

const mapStateToProps = (state: PresentationMaker) => ({
  name: state.presentation.name,
})

export default connect(mapStateToProps, mapDispatchToProps)(Headmenu)