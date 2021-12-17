import '../../App.css';
import styles from './Headmenu.module.css';
import { BasicBtns } from '../Basic-btns/Basic-btns';
import { ElementPanel } from '../ElementPanel/ElementPanel';
import React, { Component } from 'react';

export function Headmenu() {
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
                    <BasicBtns></BasicBtns>
                    <ElementPanel></ElementPanel>
                </div>
            </>
            // </BrowserRouter> 
        )
};