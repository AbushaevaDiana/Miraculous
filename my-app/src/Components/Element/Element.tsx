import '../../App.css';
import styles from './Element.module.css';
import { PresentationMaker, SelectionType, Slide, Color, ElementType, Size, Position, Presentation } from '../../types';
import { connect } from 'react-redux';
import React, { MouseEvent, DragEvent, useEffect, useRef, useState } from 'react';
import { changeTextContent, moveElement, gotoElement } from '../../store/actionsCreators/elementActionCreators'
import store from '../../store/store';
import { useMoveAndResize } from '../../Hooks/useMoving';
import { addToHistory} from '../../store/actionsCreators/historyActionCreators';

interface ElementProps{
    element: ElementType,
    selection: SelectionType,
    changeTextContent: (selection: SelectionType, content: string) => void,
    moveElement: (selection: SelectionType, position: Position) => void,
    gotoElement: (idElement: Number) => void,
    addToHistory: (presentation: Presentation, selection: SelectionType) => void,
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


    
//Сам элемент
    let webFilter: string = 'none'
    if(props.element.selected === true){
        webFilter = 'drop-shadow(7px 7px 7px #222)';
    }
    // let bColor: string = 'transparent'
    // if(props.element.border.borderStyle !== 'none'){
    //     bColor = props.element.border.color
    // }
    // let dragging: boolean = false;
//Текстовый элемент  
    if(props.element.elementConcept.type === 'text'){
       let textI: string = ''; 
       textI = props.element.elementConcept.textContent;
       let fW: string = 'normal'
       if(props.element.elementConcept.bold === true){
        fW = 'bold'
       }
       let elementStyle = {
          width: props.element.size.w,
          height: props.element.size.h,
          top: props.element.position.y,
          left: props.element.position.x,
          borderStyle: props.element.border.borderStyle,
          borderColor: props.element.border.color,
          borderWidth: props.element.border.width,
        }
        let textStyle = {
            border: 'transparent',
            color: props.element.elementConcept.color,
            fontSize: props.element.elementConcept.size,
            WebkitFilter: webFilter,
            fontFamily: props.element.elementConcept.font,
            fontWeight: fW,
        }
       return (
        <>
          <div className={styles.element} style = {elementStyle} 
           onClick={() => {props.gotoElement(props.element.idElement);
           props.addToHistory(store.getState().presentation, store.getState().selection)}} 
        /*onMouseDown = {() => {dragging = true; console.log('draggong', dragging)}}*/>
            <textarea className={styles.text} style = {textStyle} 
                value={props.element.elementConcept.textContent}
                onChange = {(e) => {props.changeTextContent(props.selection, e.currentTarget.value);
                    props.addToHistory(store.getState().presentation, store.getState().selection)}
                } 
                // onKeyPress= {
                // (e) => {if (e.key === "Enter") {
                // e.currentTarget.value = (e.currentTarget.value == '') ? 'Введите текст' : e.currentTarget.value
                // props.changeTextContent(props.selection, e.currentTarget.value)
                // e.currentTarget.blur()
                // }}}
                />
            </div>
        </>
     )
    }
//Картинка
    if(props.element.elementConcept.type === 'img') {
        let src: string = props.element.elementConcept.src;
        if(props.element.elementConcept.filter === 'black-white'){
            if(webFilter === 'none'){
                webFilter = 'grayscale(100%)';
            } else {
                webFilter = webFilter + ' grayscale(100%)';
            };
        }
        let elementStyle = {
            width: props.element.size.w,
            height: props.element.size.h,
            top: props.element.position.y,
            left: props.element.position.x,
         }
        let imgStyle = {
            borderWidth: props.element.border.width,
            borderStyle: props.element.border.borderStyle,
            borderColor: props.element.border.color,
            width: props.element.size.w,
            height: props.element.size.h,
            WebkitFilter: webFilter,
        }
        return (
         <>
           <div style={elementStyle} className = {styles.element} 
           onClick={(e) => {props.gotoElement(props.element.idElement);
            props.addToHistory(store.getState().presentation, store.getState().selection)
            //    e.stopPropagation();
            //    setMoving(true);
            }}>               
               <img src={src} style={imgStyle} alt={String(props.element.idElement)} /> 
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
                WebkitFilter: webFilter,
                top: props.element.position.y,
                left: props.element.position.x
            }
            console.log(props.element.position.y)
            let width: number = props.element.size.w/2 
            let heigth: number = props.element.size.h/2 
            return (
                <svg style={elementStyle} className = {styles.element} 
                onClick={() => {props.gotoElement(props.element.idElement);
                    props.addToHistory(store.getState().presentation, store.getState().selection)}}>
                    <ellipse rx={width-3} ry={heigth-3} cx={width} cy={heigth} 
                    fill={props.element.elementConcept.fillcolor} 
                    stroke={props.element.elementConcept.linecolor} strokeWidth="3"/>
                </svg>               
            )
        }
        if (props.element.elementConcept.figureConcept === 'Triangel') {
            let elementStyle = {
                width: props.element.size.w,
                height: props.element.size.h,
                WebkitFilter: webFilter,
                left: props.element.position.x,
                top: props.element.position.y,
            }
            let x1: string = String(props.element.size.w/46)
            let x2: string = String(props.element.size.w/2 )
            let x3: string = String(props.element.size.w - 3 ) 
            let y1: string = String(props.element.size.h - 3)
            let y2: string = String(props.element.size.h/28 )
            let y3: string = String(props.element.size.h - 3 )
            let point: string = x1+','+y1+' '+x2+','+y2+' '+x3+','+y3
            return (
               <svg style={elementStyle} className = {styles.element} 
               onClick={() => {props.gotoElement(props.element.idElement);
                props.addToHistory(store.getState().presentation, store.getState().selection)}}>
                  <polygon points={point} fill={props.element.elementConcept.fillcolor} 
                  stroke={props.element.elementConcept.linecolor} stroke-width="3"/>
               </svg>             
            )
        }
        if (props.element.elementConcept.figureConcept === 'Rectangel') {
            let elementStyle = {
                width: props.element.size.w,
                height: props.element.size.h,
                WebkitFilter: webFilter,
                top: props.element.position.y,
                left: props.element.position.x
            }
            let width: number = (props.element.size.w - 6) 
            let heigth: number = (props.element.size.h - 6)
            return (
                <svg style={elementStyle} className = {styles.element} 
                onClick={() => {props.gotoElement(props.element.idElement);
                    props.addToHistory(store.getState().presentation, store.getState().selection)}}>
                      <rect x="3" y="3" width={width} height={heigth} 
                      fill={props.element.elementConcept.fillcolor} 
                      stroke={props.element.elementConcept.linecolor} stroke-width="3"/>
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
    addToHistory,
}

export default connect(mapStateToProps, mapDispatchToProps)(Element);
//