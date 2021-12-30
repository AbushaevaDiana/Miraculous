import '../../App.css';
import styles from './Headmenu.module.css';
import  BasicBtns  from '../Basic-btns/Basic-btns';
import { ElementPanel } from '../ElementPanel/ElementPanel';
import { InsertPanel } from '../InsertPanel/InsertPanel';
import { MainPanel } from '../MainPanel/MainPanel';
// import React, { Component } from 'react';
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
                        <button className={styles.headmenuLiButton}>Главная</button>
                    </li>
                    <li className={styles.headmenuLi}>
                        <button className={styles.headmenuLiButton}>Вставить</button>
                    </li>
                    <li className={styles.headmenuLi}>
                        <button className={styles.headmenuLiButton}>Элемент</button>
                    </li>
                </ul>
                <div className = {styles.toolbar}>
                    <BasicBtns />
                    {/* <MainPanel></MainPanel> */}
                    {/* <InsertPanel></InsertPanel> */}
                    <ElementPanel></ElementPanel>
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