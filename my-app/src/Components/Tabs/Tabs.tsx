import './App.css';
import styles from './Tabs.module.css';
import React, { Component } from 'react';

export default class Tabs extends Component {
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
            </>
        )
    }
}