import '../../App.css';
import styles from './MainPanel.module.css';
import { connect } from 'react-redux';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { addSlideEffect, editSLideBackgroundColor, editSLideBackgroundImg } from '../../store/actionsCreators/slideActionCreators';
import { Presentation, PresentationMaker, SelectionType, Slide } from '../../types';
import { changeBorderColor, changeElementBorder, changeBorderSize} from '../../store/actionsCreators/elementActionCreators';
import store from '../../store/store';
import { addToHistory} from '../../store/actionsCreators/historyActionCreators';

interface MainPanelProps {
    selection: SelectionType,
    slidelist: Slide[],
    editSLideBackgroundColor: (idSlides: Number[], newBackground: string) => void,
    editSLideBackgroundImg: (idSlides: Number[], newBackground: string) => void,
    changeBorderColor: (selection: SelectionType, color: string) => void,
    changeBorderSize: (selection: SelectionType, size: number) => void,
    changeElementBorder: (selection: SelectionType, style: string) => void,
    addToHistory: (presentation: Presentation, selection: SelectionType) => void,
    addSlideEffect: (effect: string) => void,   
}

function MainPanel(props: MainPanelProps) {
    const hanglerOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputColor = event.target as HTMLInputElement
        const inputColorStr = String(inputColor.value)
        // console.log('цвет', inputColorStr)
        props.editSLideBackgroundColor(props.selection.idSlides, inputColorStr);
        props.addToHistory(store.getState().presentation, store.getState().selection);
    }
    const hanglerOnChangeBorderColor = (event: ChangeEvent<HTMLInputElement>) => {
        const inputColor = event.target as HTMLInputElement
        const inputColorStr = String(inputColor.value)
        // console.log('цвет', inputColorStr)
        props.changeBorderColor(props.selection, inputColorStr);
        props.addToHistory(store.getState().presentation, store.getState().selection);
    }
    return (
        <>
            <div className={styles.slideBackgroundContainer}>
                <div className={styles.backgroundImage}>
                    <div className={styles.slideBackgroundInscr}>Фон слайда</div>
                    <div className={styles.chooseImgContainer}>
                        <div className={styles.chooseImgIcon} onClick={() => {
                        const fileInputNode = document.createElement("input");
                        fileInputNode.type = "file";
                        fileInputNode.click();
                        fileInputNode.addEventListener("change", () => {
                        const file = fileInputNode.files?.[0] as File;
                        const reader = new FileReader();
                        
                        reader.onloadend = function () {
                        let src: string =  "https://via.placeholder.com/150";

                        if (file.type.includes("image")) {
                          src = String(reader.result);
                        }
                        props.editSLideBackgroundImg(props.selection.idSlides, src);
                        props.addToHistory(store.getState().presentation, store.getState().selection);
                        };
                        
                        reader.readAsDataURL(file);
                        });
                        }}></div>
                    </div>
                </div>
                <div className={styles.backgroundColor}>
                    <div className={styles.chooseColorIcon}></div>
                    <input type="color" onChange = {hanglerOnChange} id="slideBackground" 
                    className= {styles.chooseColorSelect} defaultValue='#F08080'></input>
                </div>
            </div>
            <div className={styles.elementOutlineContainer}>
                <div className={styles.contourContainer}>
                    <div className={styles.elementOutlineInscr}>Контур элемента</div>
                    <div className={styles.selectContainer}>
                        <input type="number" placeholder='Размер контура' id="tentacles" 
                        name="tentacles" min="0" className={styles.elementOutlineSelect}
                        onChange = {(e) => {props.changeBorderSize(props.selection, Number(e.currentTarget.value));
                            props.addToHistory(store.getState().presentation, store.getState().selection);}}
                        ></input>
                        <ul className={styles.headmenu}>
                            <li className= {styles.headmenuLi}>Тип границы
                                <ul className={styles.submenu}>
                                    <li onClick = {() => {props.changeElementBorder(props.selection, 'none');
                                    props.addToHistory(store.getState().presentation, store.getState().selection)}}>Без границы</li>
                                    <li onClick= {() => {props.changeElementBorder(props.selection, 'solid');
                            props.addToHistory(store.getState().presentation, store.getState().selection)}}>Сплошая линия</li>
                                    <li onClick={() => {props.changeElementBorder(props.selection, 'dashed');
                            props.addToHistory(store.getState().presentation, store.getState().selection);}}>Пунктирная линия</li>
                                    <li onClick={() => {props.changeElementBorder(props.selection, 'double');
                            props.addToHistory(store.getState().presentation, store.getState().selection)}}>Двойная линия</li>
                                    <li onClick={() => {props.changeElementBorder(props.selection, 'dotted');
                            props.addToHistory(store.getState().presentation, store.getState().selection)}}>Точки</li>
                                </ul>
                            </li>
                        </ul>    
                    </div>                
                </div>
                <div className={styles.backgroundColor}>
                    <div className={styles.colorContourIcon}></div>
                    <input type="color"id="borderColor"  onChange = {hanglerOnChangeBorderColor}
                    className= {styles.chooseColorSelect + ' ' + styles.chooseColorContour} defaultValue='#F08080'>
                    </input>                    
                </div>
            </div>
            <div className={styles.animationContainer}>
                <div className={styles.animationIcon}></div>
                <ul className={styles.headmenu + ' ' + styles.headmenuAnimations}>
                    <li className= {styles.headmenuLi}>Анимация слайдов
                        <ul className={styles.submenu}>
                            <li onClick = {() => {props.addSlideEffect('none');
                                props.addToHistory(store.getState().presentation, store.getState().selection)}}>Без анимации</li>
                            <li onClick= {() => {props.addSlideEffect('increase');
                                props.addToHistory(store.getState().presentation, store.getState().selection)}}>Увеличение</li>
                            <li onClick={() => {props.addSlideEffect('rotation');
                                props.addToHistory(store.getState().presentation, store.getState().selection)}}>Поворот</li>
                            <li onClick={() => {props.addSlideEffect('fading');
                                props.addToHistory(store.getState().presentation, store.getState().selection)}}>Проявление</li>
                        </ul>
                    </li>
                </ul>    
            </div>
        </>
    )
}

const mapDispatchToProps = ({
    editSLideBackgroundColor,
    editSLideBackgroundImg,
    changeBorderColor,
    addToHistory,
    changeElementBorder,
    changeBorderSize,
    addSlideEffect
})
  
function mapStateToProps(state: PresentationMaker) {
    return {selection: state.selection, slidelist: state.presentation.slidelist} 
}
  
export default connect(mapStateToProps, mapDispatchToProps)(MainPanel)