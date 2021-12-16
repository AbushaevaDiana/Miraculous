import './App.css';
import styles from './Headmenu.module.css';
import BasicBtns from '../Basic-btns/Basic-btns';
import Element from '../Element/Element';
import React, { Component } from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
// import { createBrowserHistory } from "history";
// const history = createBrowserHistory();

export default class Headmenu extends Component {
    render() {
        return (
            // <BrowserRouter history = {history}>
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