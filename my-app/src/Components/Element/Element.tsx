import '../../App.css';
// import styles from './Slide.module.css';
import { PresentationMaker, SelectionType, Slide, Color, ElementType, Size, Position } from '../../types';
import { connect } from 'react-redux';
import React, { DragEvent, useEffect, useRef, useState } from 'react';
import { changeTextContent, changeElemPosition } from '../../store/actionsCreators/elementActionCreators'
import { useDragAndDropElement } from '../../Hooks/ElementMouse';

interface ElementProps{
    element: ElementType,
    selection: SelectionType,
    changeTextContent: (idElements: Number[], content: string) => void,
    changeElemPosition: (newX: number, newY: number, id: Number) => void,
};

export function Element(props: ElementProps) {  
    // useDragAndDropElement({
    //     element: props.element,
    //     changeElemPosition: props.changeElemPosition,
    //     elemRef,
    //     mainSvgProps,
    //     setPos
    //   })

    let textI: string = '';   
    if(props.element.elementConcept.type === 'text'){
       textI = props.element.elementConcept.textContent;
       return (
        <>
          <div id={String(props.element.idElement)}>
          
            <svg height="100" width="100">
                <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
             </svg>
            <input type="text" defaultValue={textI} 
                        onKeyPress= {
                        (e) => {if (e.key === "Enter") {
                        e.currentTarget.value = (e.currentTarget.value == '') ? 'Введите текст' : e.currentTarget.value
                        props.changeTextContent(props.selection.idElements, e.currentTarget.value)
                        e.currentTarget.blur()
                }}}/>
            </div>
        </>
     )
    }
    else {
        return (
            <></>
        )
    }
};


//
function mapStateToProps(state: PresentationMaker) {
   return{ selection: state.selection}
};

const mapDispatchToProps = {
    changeTextContent,
    changeElemPosition,
}

export default connect(mapStateToProps, mapDispatchToProps)(Element);
//