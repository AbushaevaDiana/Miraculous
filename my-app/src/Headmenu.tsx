import './App.css';
import styles from './Headmenu.module.css';
import React, { Component } from 'react';

export default class Headmenu extends Component {
    render() {
        return (
            <> 
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
                    <div className={styles.toolbarNewSlide}>
                        <div className={styles.newSlideBtnImg}></div>
                        <p className={styles.newSlideBtnInsc + ' ' + styles.toolInsc}>Новый слайд</p>
                    </div>
                    <div className={styles.toolbarCancelRefund + ' ' +styles.cancelRefundBtn}>
                        <div className= {styles.cancelRefundBtnContainer + ' ' +styles.doRedoBtn}>
                            <div className={styles.doRedoBtnArrow + ' ' + styles.arrowLeft}></div>
                            <p className={styles.doRedoBtnInsc + ' ' + styles.toolInsc}>Отмена</p>
                        </div>
                        <div className={styles.cancelRefundBtnContainer + ' ' +styles.doRedoBtn}>
                        <div className={styles.doRedoBtnArrow + ' ' + styles.arrowRight}></div>
                            <p className={styles.doRedoBtnInsc + ' ' + styles.toolInsc}>Возврат</p>
                        </div>
                    </div>
                    <div className={styles.toolbarFont + ' ' +styles.fontContainer}>
                        <div className={styles.fontContainerBt + ' ' + styles.fontBtn}>
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
                                <select  className={styles.fontSelectField +  ' ' + styles.selectField}>
                                    <option className={styles.selectFieldOption}>32,0 pt</option>
                                    <option className={styles.selectFieldOption}>33,0 pt</option>
                                    <option className={styles.selectFieldOption}>34,0 pt</option>
                                </select>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.toolbarSelectContainer + ' ' + styles.elementSettings}>
                        <div className={styles.elementSettingsImg + ' ' + styles.filterIcon}></div>
                        <select className={styles.elementSettingsSelect + ' ' + styles.selectField}>
                            <option className={styles.selectFieldOption}>Фильтры</option>
                            <option className={styles.selectFieldOption}>черно-белый</option>
                            <option className={styles.selectFieldOption}>красный</option>
                        </select>
                    </div>
                    <div className={styles.toolbarSelectContainer + ' ' +styles.elementSettings}>
                        <div className={styles.elementSettingsImg + ' ' + styles.contourIcon}></div>
                        <select className={styles.elementSettingsSelect + ' ' + styles.selectField}>
                            <option className={styles.selectFieldOption}>Контур фигуры</option>
                            <option className={styles.selectFieldOption}>черно-белый</option>
                            <option className={styles.selectFieldOption}>красный</option>
                        </select>
                    </div>
                    <div className={styles.toolbarSelectContainer + ' ' +styles.elementSettings}>
                        <div className={styles.elementSettingsImg + ' ' + styles.fillIcon}></div>
                        <select className= {styles.lementSettingsSelect + ' ' + styles.selectField} >
                            <option className={styles.selectFieldOption}>Заливка фигуры</option>
                            <option className={styles.selectFieldOption}>черно-белый</option>
                            <option className={styles.selectFieldOption}>красный</option>
                        </select>
                    </div>
                </div>
            </>
        )
    }
};