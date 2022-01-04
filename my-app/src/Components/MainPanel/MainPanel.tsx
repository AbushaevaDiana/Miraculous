import '../../App.css';
import styles from './MainPanel.module.css';
import { connect } from 'react-redux';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { editSLideBackgroundColor } from '../../store/actionsCreators/slideActionCreators';
import { PresentationMaker, SelectionType } from '../../types';

interface MainPanelProps {
    selection: SelectionType,
    editSLideBackgroundColor: (idSlides: Number[], newBackground: string) => void,
}

function MainPanel(props: MainPanelProps) {
    const hanglerOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputColor = event.target as HTMLInputElement
        const inputColorStr = String(inputColor.value)
        console.log('цвет', inputColorStr)
        props.editSLideBackgroundColor(props.selection.idSlides, inputColorStr)
    }
    return (
        <>
            <div className={styles.slideBackgroundContainer}>
                <div className={styles.backgroundImage}>
                    <div className={styles.slideBackgroundInscr}>Фон слайда</div>
                    <div className={styles.chooseImgContainer}>
                        <div className={styles.chooseImgIcon}></div>
                        <input type="text" className={styles.chooseImgInput} />
                    </div>
                </div>
                <div className={styles.backgroundColor}>
                    <div className={styles.chooseColorIcon}></div>
                    <input type="color" onChange = {hanglerOnChange}id="slideBackground" className= {styles.chooseColorSelect} defaultValue='#F08080'></input>
                </div>
            </div>
            <div className={styles.elementOutlineContainer}>
                <div className={styles.elementOutlineInscr}>Контур элемента</div>
                <div className={styles.selectContainer}>
                    <select className={styles.elementOutlineSelect}>
                        <option className={styles.elementOutlineOption}>5px</option>
                        <option className={styles.elementOutlineOption}>6px</option>
                        <option className={styles.elementOutlineOption}>7px</option>
                        <option className={styles.elementOutlineOption}>8px</option>
                    </select>
                    <select className={styles.elementOutlineSelect}>
                        <option className={styles.elementOutlineOption}>Сплошная линия</option>
                        <option className={styles.elementOutlineOption}>Пунктирная линия</option>
                    </select>
                </div>
                <div className={styles.colorContourContainer}>
                    <div className={styles.colorContourIcon}></div>
                    {/* <hr className={styles.hrIcon} /> */}
                    <input type="color"id="borderColor" className= {styles.chooseColorSelect} defaultValue='#F08080'>
                    </input>
                    
                </div>
            </div>
            <div className={styles.animationContainer}>
                <div className={styles.animationIcon}></div>
                <select className={styles.elementOutlineSelect + ' ' + styles.elementOutlineSelectSmall}>
                    <option className={styles.elementOutlineOption}>Без анимации</option>
                    <option className={styles.elementOutlineOption}>Появление</option>
                    <option className={styles.elementOutlineOption}>Вспытие</option>
                    <option className={styles.elementOutlineOption}>оРиГаМи</option>
                </select>
            </div>
        </>
    )
}

const mapDispatchToProps = ({
    editSLideBackgroundColor
})
  
function mapStateToProps(state: PresentationMaker) {
    return {selection: state.selection} 
}
  
export default connect(mapStateToProps, mapDispatchToProps)(MainPanel)