import '../../App.css';
import styles from './InsertPanel.module.css';
import { connect } from 'react-redux';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Img, PresentationMaker, SelectionType } from '../../types';
import { addText, deleteElement, addPicture} from '../../store/actionsCreators/elementActionCreators';


interface InsertPanelProps {
    addText: () => void,
    selection: SelectionType,
    addPicture: (src: string) => void,
}

export function InsertPanel(props: InsertPanelProps) {
    function getFileName(srcP: string, props: InsertPanelProps) {
        console.log(srcP);
        let fr = new FileReader();
        props.addPicture('Htllj');
    }
    return (
        <>
            <form className={styles.imageContainer}>
                <div className={styles.imgBlock}>
                    <div className={styles.icon + ' ' + styles.imgIcon}
                    onClick={() => {
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
                        console.log(src)
                        props.addPicture(src)
                        };
                        
                        reader.readAsDataURL(file);
                        });
                        }}></div>
                    <div className={styles.insc}>Картинку</div>
                </div>
            </form>
            <div className={styles.textContainer}>
                <div className={styles.textBlock} onClick = {() => props.addText()}>
                    <div className={styles.icon + ' ' + styles.textIcon}></div>
                    <div className={styles.insc}>Текст</div>
                </div>
            </div>
            <div className={styles.figureContainer}>
                <div className={styles.figureBlock}>
                    <div className={styles.icon + ' ' + styles.figureIcon}></div>
                    <div className={styles.insc}>Фигуру</div>
                </div>
                <div className={styles.figureTypeBlock}>
                    <div className={styles.figureTypeIcon + ' ' + styles.triangleIcon}></div>
                </div>
                <div className={styles.figureTypeBlock}>
                    <div className={styles.figureTypeIcon + ' ' + styles.circleIcon}></div>
                </div>
                <div className={styles.figureTypeBlock}>
                    <div className={styles.figureTypeIcon + ' ' + styles.squareIcon}></div>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = ({
    addText,
    deleteElement,
    addPicture,
})
  
function mapStateToProps(state: PresentationMaker) {
    return { selection: state.selection} 
}
  
export default connect(mapStateToProps, mapDispatchToProps)(InsertPanel)