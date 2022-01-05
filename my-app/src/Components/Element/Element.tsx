import '../../App.css';
// import styles from './Slide.module.css';
import { PresentationMaker, SelectionType, Slide, Color, ElementType, Size, Position } from '../../types';
import { connect } from 'react-redux';
import React, { DragEvent, useEffect, useRef, useState } from 'react';
import { changeTextContent } from '../../store/actionsCreators/elementActionCreators'

interface ElementProps{
    element: ElementType,
    selection: SelectionType,
    changeTextContent: (idElements: Number[], content: string) => void,
};



export function Element(props: ElementProps){    
    const[currentElement, setCurrentElement] = useState(props.element)
    function dragStartHandler(e: DragEvent<HTMLDivElement>, props: ElementProps) {
        console.log('drag', props.element)
        setCurrentElement(props.element)
    }
    function dragLeaveHandler(e: DragEvent<HTMLDivElement>, props: ElementProps) {
        e.preventDefault()

    }
    function dragEndHandler(e: DragEvent<HTMLDivElement>, props: ElementProps) {

    }
    function dragOverHandler(e: DragEvent<HTMLDivElement>, props: ElementProps) {
        e.preventDefault()

    }
    function dropHandler(e: DragEvent<HTMLDivElement>, props: ElementProps) {
        e.preventDefault()
 
    }


    let textI: string = '';   
    if(props.element.elementConcept.type === 'text'){
       textI = props.element.elementConcept.textContent;
       return (
        <>
          <div 
          onDragStart={(e: DragEvent<HTMLDivElement>) => dragStartHandler(e, props)}
          onDragLeave={(e: DragEvent<HTMLDivElement>) => dragLeaveHandler(e, props)}
          onDragEnd={(e: DragEvent<HTMLDivElement>) => dragEndHandler(e, props)}
          onDragOver={(e: DragEvent<HTMLDivElement>) => dragOverHandler(e, props)}
          onDrop={(e: DragEvent<HTMLDivElement>) => dropHandler(e, props)}
          draggable = {true}>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Element);
//