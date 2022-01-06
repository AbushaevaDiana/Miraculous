import '../../App.css';
import styles from './Element.module.css';
import { PresentationMaker, SelectionType, Slide, Color, ElementType, Size, Position } from '../../types';
import { connect } from 'react-redux';
import React, { MouseEvent, DragEvent, useEffect, useRef, useState } from 'react';
import { changeTextContent, moveElement, gotoElement } from '../../store/actionsCreators/elementActionCreators'
import { url } from 'inspector';
import { useMoveAndResize } from '../../Hooks/useMoving';

interface ElementProps{
    element: ElementType,
    selection: SelectionType,
    changeTextContent: (selection: SelectionType, content: string) => void,
    moveElement: (selection: SelectionType, position: Position) => void,
    gotoElement: (idElement: Number) => void,
};

export function Element(props: ElementProps){
   
    const [moving, setMoving] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        !moving && props.moveElement(props.selection, posit)
    })

    const [p, s] = useMoveAndResize(
        elementRef,
        // resizeRef,
        props.element.position,
        props.element.selected,
        (status) => {
        props.element.selected && setMoving(status);
        });

        
    const posit = p as Position;
    //const sz = s as Size;
        
    let elementStyle = {
        top: moving ? posit.y : props.element.position.y,
        left: moving ? posit.x : props.element.position.x,
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
           <div onClick={(e) => {props.gotoElement(props.element.idElement);
           e.stopPropagation();
           setMoving(true);
        }}>               
               <img src={src} alt={String(props.element.idElement)} /> 
            </div>
         </>
      )
     }
    if (props.element.elementConcept.type === 'figure') {
        if (props.element.elementConcept.figureConcept === 'Round') {
            return (
                <svg width={props.element.size.w} height={props.element.size.h} fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx={props.element.size.w / 2} cy={props.element.size.h / 2} rx={props.element.size.w / 2} ry={props.element.size.h / 2} fill={props.element.elementConcept.fillcolor || '#ffffff'} />
                </svg>                
            )
        }
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