import './App.css';
import './Headmenu.css';
import React, { Component } from 'react';
export default class Headmenu extends Component {
    render() {
        return (
            <> 
                <ul className="headmenu">
                    <li className="headmenu__li">       
                        <button className="headmenu__li__button">Файл</button>
                    </li>
                    <li className="headmenu__li">
                        <button className="headmenu__li__button">Главная</button>
                    </li>
                    <li className="headmenu__li">
                        <button className="headmenu__li__button">Вставить</button>
                    </li>
                    <li className="headmenu__li">
                        <button className="headmenu__li__button">Эллемент</button>
                    </li>
                </ul>
                <div className = "toolbar">
                    <div className="toolbar__newSlide newSlide-btn">
                        <div className="newSlide-btn__img"></div>
                        <p className="newSlide-btn__insc tool-insc">Новый слайд</p>
                    </div>
                    <div className="toolbar__cancelRefund cancelRefund-btn">
                        <div className="cancelRefund-btn__container do-redo-btn">
                            <div className="do-redo-btn__arrow arrow-left"></div>
                            <p className="do-redo-btn__insc tool-insc">Отмена</p>
                        </div>
                        <div className="cancelRefund-btn__container do-redo-btn">
                        <div className="do-redo-btn__arrow arrow-right"></div>
                            <p className="do-redo-btn__insc tool-insc">Возврат</p>
                        </div>
                    </div>
                    <div className="toolbar__font font-container">
                        <div className="font-container__btn font-btn">
                            <div className="font-btn__img"></div>
                            <p className="font-btn__insc tool-insc">Шрифт</p>
                        </div>
                        <div className="font-container__settings font-settings">
                            <div className="font-settings__select font-select">
                                <select size = {3} className="font-select__field select-field">
                                    <option className="select-field__option">Roboto</option>
                                    <option className="select-field__option">Open Sans</option>
                                    <option className="select-field__option">Praise</option>
                                </select>
                                <select size={3} className="font-select__field select-field">
                                    <option className="select-field__option">32,0 pt</option>
                                    <option className="select-field__option">33,0 pt</option>
                                    <option className="select-field__option">34,0 pt</option>
                                </select>
                            </div>
                            <div className="font-settings__mark font-mark">
                                <div className="font-mark__icon bold"></div>
                                <div className="font-mark__icon italic"></div>
                                <div className="font-mark__icon underlined"></div>
                                <div className="font-mark__icon select-color"></div>
                            </div>
                        </div>
                    </div>
                    <div className="toolbar__select-container element-settings">
                        <div className="element-settings__img filter-icon"></div>
                        <select size={3} className="element-settings__select select-field">
                            <option className="select-field__option">Фильтры</option>
                            <option className="select-field__option">черно-белый</option>
                            <option className="select-field__option">красный</option>
                        </select>
                    </div>
                    <div className="toolbar__select-container element-settings">
                        <div className="element-settings__img contour-icon"></div>
                        <select size={3} className="element-settings__select select-field">
                            <option className="select-field__option">Контур фигуры</option>
                            <option className="select-field__option">черно-белый</option>
                            <option className="select-field__option">красный</option>
                        </select>
                    </div>
                    <div className="toolbar__select-container element-settings">
                        <div className="element-settings__img fill-icon"></div>
                        <select className="element-settings__select select-field" size={3}>
                            <option className="select-field__option">Заливка фигуры</option>
                            <option className="select-field__option">черно-белый</option>
                            <option className="select-field__option">красный</option>
                        </select>
                    </div>
                </div>
            </>
        )
    }
};