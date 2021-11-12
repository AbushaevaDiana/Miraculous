import './App.css';
import React, { Component } from 'react';
export default class Headmenu extends Component {
    render() {
        return(
            <> 
                <ul class="headmenu">
                    <li class="headmenu__li">       
                        <button class="headmenu__li__button">Файл</button>
                    </li>
                    <li class="headmenu__li">
                        <button class="headmenu__li__button">Главная</button>
                    </li>
                    <li class="headmenu__li">
                        <button class="headmenu__li__button">Вставить</button>
                    </li>
                    <li class="headmenu__li">
                        <button class="headmenu__li__button">Эллемент</button>
                    </li>
                </ul>
            </>
        )

    }
};

