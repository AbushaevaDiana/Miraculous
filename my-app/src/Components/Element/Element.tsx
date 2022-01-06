import '../../App.css';
import styles from './Element.module.css';
import { PresentationMaker, SelectionType, Slide, Color, ElementType, Size, Position } from '../../types';
import { connect } from 'react-redux';
import React, { MouseEvent, DragEvent, useEffect, useRef, useState } from 'react';
import { changeTextContent, moveElement, gotoElement } from '../../store/actionsCreators/elementActionCreators'
import { url } from 'inspector';

interface ElementProps{
    element: ElementType,
    selection: SelectionType,
    changeTextContent: (selection: SelectionType, content: string) => void,
    moveElement: (selection: SelectionType, position: Position) => void,
    gotoElement: (idElement: Number) => void,
};

export function Element(props: ElementProps){
    let elementStyle = {
        top: props.element.position.y,
        left: props.element.position.x,
    }     
    let textI: string = '';   
    if(props.element.elementConcept.type === 'text'){
       textI = props.element.elementConcept.textContent;
       console.log(props.element.elementConcept.textContent)
       return (
        <>
          <div onClick={() => props.gotoElement(props.element.idElement)}>
            <svg height="6" width="6">
                <circle cx="3" cy="3" r="3" stroke="black" stroke-width="3" fill="black" />
             </svg>
            <input style = {elementStyle} className={styles.text} type="text" defaultValue={textI} 
                        onKeyPress= {
                        (e) => {if (e.key === "Enter") {
                        e.currentTarget.value = (e.currentTarget.value == '') ? 'Введите текст' : e.currentTarget.value
                        props.changeTextContent(props.selection, e.currentTarget.value)
                        e.currentTarget.blur()
                }}}/>
            </div>
        </>
     )
    }
    if(props.element.elementConcept.type === 'img') {
        let src: string = props.element.elementConcept.src;
        console.log(src);
        return (
         <>
           <div onClick={() => props.gotoElement(props.element.idElement)}>
               
               <img src={src} alt={String(props.element.idElement)} /> 

            </div>
         </>
      )
     }
    return (
            <></>
        )
};


//
function mapStateToProps(state: PresentationMaker) {
   return{ selection: state.selection}
};

const mapDispatchToProps = {
    changeTextContent,
    moveElement,
    gotoElement,
}

export default connect(mapStateToProps, mapDispatchToProps)(Element);
//