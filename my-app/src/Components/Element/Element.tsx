import '../../App.css';
import styles from './Element.module.css';
import { PresentationMaker, SelectionType, Slide, Color, ElementType, Size, Position, Presentation } from '../../types';
import { connect } from 'react-redux';
import React, { MouseEvent, DragEvent, useEffect, useRef, useState } from 'react';
import { changeTextContent, moveElement, gotoElement, resizeElement } from '../../store/actionsCreators/elementActionCreators'
import store from '../../store/store';
import { useMoveAndResize } from '../../Hooks/useMoving';
import { addToHistory} from '../../store/actionsCreators/historyActionCreators';
import { useDragAndDrop } from '../../Hooks/draganddrops_2';
import { useResizeElement } from '../../Hooks/resize';

interface ElementProps{
    element: ElementType,
    selection: SelectionType,
    changeTextContent: (selection: SelectionType, content: string) => void,
    moveElement: (selection: SelectionType, position: Position) => void,
    gotoElement: (idElement: Number) => void,
    addToHistory: (presentation: Presentation, selection: SelectionType) => void,
    resizeElement: (selection: SelectionType, size: Size) => void,
};
type DeltaType = {x: number, y: number};
type DifType = {x: number, y: number};
   

export function Element(props: ElementProps){
    const [moving, setMoving] = useState(false);
    const [delta, setDelta] = useState<DeltaType>({x: 0, y:0});
    const [dif, setDif] = useState<DifType>({x: 0, y: 0});
    const elementRef = useRef<any>(null);
    const resizeRef = useRef<any>(null);
    const getSelection = () => props.selection;
    useDragAndDrop(elementRef, setDelta, getSelection, props.moveElement, props.addToHistory);
    useResizeElement(resizeRef, setDif, getSelection, props.resizeElement, props.addToHistory);
    
//Сам элемент
    let webFilter: string = 'none';
    let resize = 'none';
    if(props.element.selected === true){
        webFilter = 'drop-shadow(7px 7px 7px #222)';
        resize = '';
    };
    let resizeStyle = {
        background: resize,
        top: props.element.size.h -20,
        left: props.element.size.w -20,
    }

//Текстовый элемент  
    if(props.element.elementConcept.type === 'text'){
       let textI: string = ''; 
       textI = props.element.elementConcept.textContent;
       let fW: string = 'normal'
       let fI: string = 'normal'
       let fU: string = 'none'
       if(props.element.elementConcept.bold === true){
        fW = 'bold'
       }
       if(props.element.elementConcept.italic === true){
        fI = 'italic'
       }
       if(props.element.elementConcept.underline === true){
        fU = 'underline'
       }
       let elementStyle = {
          width: props.element.size.w + dif.x,
          height: props.element.size.h + dif.y,
          top: props.element.position.y + delta.y,
          left: props.element.position.x + delta.x,
          borderStyle: props.element.border.borderStyle,
          borderColor: props.element.border.color,
          borderWidth: props.element.border.width,
        }
        let textStyle = {
            border: 'transparent',
            textDecoration: fU,
            fontStyle: fI,
            fontWeight: fW,
            color: props.element.elementConcept.color,
            fontSize: props.element.elementConcept.size,
            WebkitFilter: webFilter,
            fontFamily: props.element.elementConcept.font,
        }
       return (
        <>
          <div className={styles.element} style = {elementStyle} >
            <textarea className={styles.text} style = {textStyle} 
            ref={elementRef} 
            onClick={() => {props.gotoElement(props.element.idElement);
            props.addToHistory(store.getState().presentation, store.getState().selection)}} 
                value={props.element.elementConcept.textContent}
                onChange = {(e) => {props.changeTextContent(props.selection, e.currentTarget.value);
                    props.addToHistory(store.getState().presentation, store.getState().selection)}
                } 
                />
                <div ref={resizeRef} className = {styles.resize} style={resizeStyle}></div>
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
        };
        if(props.element.elementConcept.filter === 'negative'){
            if(webFilter === 'none'){
                webFilter = 'invert(1)';
            } else {
                webFilter = webFilter + ' invert(1)';
            };
        };

        
        let elementStyle = {
            width: props.element.size.w,
            height: props.element.size.h,
            top: props.element.position.y + delta.y,
            left: props.element.position.x + delta.x,
         }
        let svgStyle = {
            width: props.element.size.w,
            height: props.element.size.h,
            top: props.element.position.y + delta.y,
            left: props.element.position.x + delta.x,
            WebkitFilter: webFilter,
            borderWidth: props.element.border.width,
            borderStyle: props.element.border.borderStyle,
            borderColor: props.element.border.color,
        }
        let imgStyle = {
            width: props.element.size.w,
            height: props.element.size.h,
        }
        return (
         <>
          <div style={elementStyle} className = {styles.element} >
               <svg ref={elementRef} preserveAspectRatio="none" style={svgStyle}
               onClick={(e) => {props.gotoElement(props.element.idElement);
                props.addToHistory(store.getState().presentation, store.getState().selection)}}>              
                   <image href={src} style={imgStyle} preserveAspectRatio="none"/>
               </svg>
               <div ref={resizeRef} className = {styles.resize} style={resizeStyle}></div>
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
                top: props.element.position.y + delta.y,
                left: props.element.position.x + delta.x,
            }
            // console.log(props.element.position.y)
            let width: number = props.element.size.w/2;
            let heigth: number = props.element.size.h/2; 
            return (
                <div style={elementStyle} className = {styles.element} >
                    <svg preserveAspectRatio="none" style={elementStyle} ref={elementRef}
                    onClick={() => {props.gotoElement(props.element.idElement);
                        props.addToHistory(store.getState().presentation, store.getState().selection)}}>
                        <ellipse rx={width-3} ry={heigth-3} cx={width} cy={heigth} 
                        fill={props.element.elementConcept.fillcolor} 
                        stroke={props.element.elementConcept.linecolor} strokeWidth="3"/>
                    </svg> 
                    <div ref={resizeRef} className = {styles.resize} style={resizeStyle}></div>
                </div>              
            )
        }
        if (props.element.elementConcept.figureConcept === 'Triangel') {
            let elementStyle = {
                width: props.element.size.w,
                height: props.element.size.h,
                WebkitFilter: webFilter,
                left: props.element.position.x + delta.x,
                top: props.element.position.y + delta.y,
            }
            let x1: string = String(props.element.size.w/46)
            let x2: string = String(props.element.size.w/2 )
            let x3: string = String(props.element.size.w - 3 ) 
            let y1: string = String(props.element.size.h - 3)
            let y2: string = String(props.element.size.h/28 )
            let y3: string = String(props.element.size.h - 3 )
            let point: string = x1+','+y1+' '+x2+','+y2+' '+x3+','+y3
            return (
               <div  style={elementStyle} className = {styles.element} >
                   <svg ref={elementRef} preserveAspectRatio="none" style={elementStyle}
                    onClick={() => {props.gotoElement(props.element.idElement);
                        props.addToHistory(store.getState().presentation, store.getState().selection)}}>
                      <polygon points={point} fill={props.element.elementConcept.fillcolor} 
                       stroke={props.element.elementConcept.linecolor} stroke-width="3"/>
                  </svg> 
                  <div ref={resizeRef} className = {styles.resize} style={resizeStyle}></div> 
               </div>           
            )
        }
        if (props.element.elementConcept.figureConcept === 'Rectangel') {
            let elementStyle = {
                width: props.element.size.w,
                height: props.element.size.h,
                WebkitFilter: webFilter,
                top: props.element.position.y + delta.y,
                left: props.element.position.x + delta.x,
            }
            let width: number = (props.element.size.w - 6) 
            let heigth: number = (props.element.size.h - 6)
            return (
                <div  style={elementStyle} className = {styles.element} >
                    <svg ref={elementRef} preserveAspectRatio="none"  style={elementStyle}
                     onClick={() => {props.gotoElement(props.element.idElement);
                        props.addToHistory(store.getState().presentation, store.getState().selection)}}>
                      <rect x="3" y="3" width={width} height={heigth} preserveAspectRatio="none"
                      fill={props.element.elementConcept.fillcolor} 
                      stroke={props.element.elementConcept.linecolor} stroke-width="3"/>
                    </svg> 
                    <div ref={resizeRef} className = {styles.resize} style={resizeStyle}></div>  
                </div>            
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
    resizeElement,
}

export default connect(mapStateToProps, mapDispatchToProps)(Element);
//