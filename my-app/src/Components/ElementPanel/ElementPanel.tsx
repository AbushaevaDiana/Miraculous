import '../../App.css';
import styles from './ElementPanel.module.css';
import { connect } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';


export function ElementPanel() {
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
                    <input type="color"id="borderColor" className= {styles.elementSettingsSelect + ' ' + styles.selectField} defaultValue='#F08080'>
                    </input>
                </div>
                <div className={styles.toolbarSelectContainer + ' ' +styles.elementSettings}>
                    <div className={styles.elementSettingsImg + ' ' + styles.fillIcon}></div>
                    <input type="color"id="borderColor" className= {styles.elementSettingsSelect + ' ' + styles.selectField} defaultValue='#F08080'>
                    </input>
                </div>
                <div className={styles.deleteElementContainer}>   
                    <div className={styles.deleteElementIcon}></div>
                    <p className={styles.deleteElementInscr}>Удалить элемент</p> 
                </div>
            </>
        )
}