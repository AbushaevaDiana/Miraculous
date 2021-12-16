import '../../App.css';
import styles from './Headmenu.module.css';
import BasicBtns from '../Basic-btns/Basic-btns';
import Element from '../Element/Element';
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
                    <BasicBtns></BasicBtns>
                    <Element></Element>
                </div>
            </>
            // </BrowserRouter> 
        )
    }
};