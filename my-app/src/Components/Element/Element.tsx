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
        
//Текстовый элемент
    let textI: string = '';   
    if(props.element.elementConcept.type === 'text'){
       textI = props.element.elementConcept.textContent;
       console.log(props.element.elementConcept.textContent)
       let fW: string = 'normal'
       if(props.element.elementConcept.bold === true){
        fW = 'bold'
       }
       let elementStyle = {
           font: props.element.elementConcept.font,
           fontWeight: fW,
           color: props.element.elementConcept.color.color,
           width: props.element.size.w,
           height: props.element.size.h,
        }
       return (
        <>
          
          <div onClick={() => props.gotoElement(props.element.idElement)}>
            <svg height="6" width="6">
                <circle cx="3" cy="3" r="3" stroke="black" stroke-width="3" fill="black" />
             </svg>
            <textarea style = {elementStyle} className={styles.text}  defaultValue={textI} 
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
//Картинка
    if(props.element.elementConcept.type === 'img') {
        let src: string = props.element.elementConcept.src;
        console.log(src);
        let elementStyle = {
            width: props.element.size.w,
            height: props.element.size.h,
         }
        return (
         <>
           <div onClick={(e) => {props.gotoElement(props.element.idElement);
           e.stopPropagation();
           setMoving(true);
        }}>               
               <img src={src} style={elementStyle} alt={String(props.element.idElement)} /> 
            </div>
         </>
      )
     }
//Фигуры
    if (props.element.elementConcept.type === 'figure') {
        if (props.element.elementConcept.figureConcept === 'Round') {
            let elementStyle = {
                width: props.element.size.w,
                height: props.element.size.h,
            }
            let width: number = props.element.size.w/2 
            let heigth: number = props.element.size.h/2 
            return (
                <svg style={elementStyle} onClick={() => props.gotoElement(props.element.idElement)}>
                    <ellipse rx={width-5} ry={heigth-5} cx={width} cy={heigth} 
                    fill={props.element.elementConcept.fillcolor} 
                    stroke={props.element.elementConcept.linecolor} strokeWidth="5"/>
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