import '../../App.css';
import styles from './Element.module.css';
import { PresentationMaker, SelectionType, Slide, Color, ElementType, Size, Position } from '../../types';
import { connect } from 'react-redux';

interface miniElementProps{
    element: ElementType,
};

export function MaxElement(props: miniElementProps){ 
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
           width: (props.element.size.w*24/20),
           height: (props.element.size.h*24/20),
           top: (props.element.position.y*24/20),
           left: (props.element.position.x*24/20),
           borderStyle: props.element.border.borderStyle,
           borderColor: props.element.border.color,
           borderWidth: props.element.border.width*24/20,
        }
        let textStyle = {
            color: props.element.elementConcept.color,
            fontSize: (props.element.elementConcept.size*24/20),
            fontFamily: props.element.elementConcept.font,
            fontWeight: fW,
        }
       return (
        <>
            <div className={styles.element} style = {elementStyle}>
                <textarea disabled className={styles.text}  style = {textStyle} defaultValue={props.element.elementConcept.textContent} />
            </div>
        </>
     )
    }
//Картинка
    if(props.element.elementConcept.type === 'img') {
        let src: string = props.element.elementConcept.src;
        let webFilter: string = 'none';
        if(props.element.elementConcept.filter === 'black-white'){
            if(webFilter === 'none'){
                webFilter = 'grayscale(100%)';
            } else {
                webFilter = webFilter + ' grayscale(100%)';
            };
        }
        let elementStyle = {
            WebkitFilter: webFilter,
            width: (props.element.size.w*24/20),
            height: (props.element.size.h*24/20),
            top: props.element.position.y*24/20,
            left: props.element.position.x*24/20,
            borderWidth: props.element.border.width*24/20,
            borderStyle: props.element.border.borderStyle,
            borderColor: props.element.border.color,
         }
        return (
         <>
            <img className = {styles.element} style={elementStyle} src={src} alt={String(props.element.idElement)} /> 
         </>
      )
     }
//Фигуры
    if (props.element.elementConcept.type === 'figure') {
        if (props.element.elementConcept.figureConcept === 'Round') {
            let elementStyle = {
                width: (props.element.size.w*24/20),
                height: (props.element.size.h*24/20),
                top: props.element.position.y*24/20,
                left: props.element.position.x*24/20,
            }
            let width: number = props.element.size.w*24/20/2 
            let heigth: number = props.element.size.h*24/20/2
            return (
                <svg style={elementStyle} className = {styles.element}>
                    <ellipse rx={width-3} ry={heigth-3} cx={width} cy={heigth} 
                    fill={props.element.elementConcept.fillcolor} 
                    stroke={props.element.elementConcept.linecolor} strokeWidth="3"/>
                </svg>               
            )
        }
        if (props.element.elementConcept.figureConcept === 'Triangel') {
            let w6: number = props.element.size.w*24/20
            let h6: number = props.element.size.h*24/20
            let elementStyle = {
                width: w6,
                height: h6,
                left: props.element.position.x*24/20,
                top: props.element.position.y*24/20,
            }
            let x1: string = String(w6/46)
            let x2: string = String(w6/2 )
            let x3: string = String(w6 - 3) 
            let y1: string = String(h6 - 3)
            let y2: string = String(h6/28 )
            let y3: string = String(h6 - 3)
            let point: string = x1+','+y1+' '+x2+','+y2+' '+x3+','+y3
            return (
               <svg style={elementStyle} className = {styles.element}>
                  <polygon points={point} fill={props.element.elementConcept.fillcolor} 
                  stroke={props.element.elementConcept.linecolor} stroke-width="3"/>
               </svg>             
            )
        }
        if (props.element.elementConcept.figureConcept === 'Rectangel') {
            let w6: number = props.element.size.w*24/20
            let h6: number = props.element.size.h*24/20
            let elementStyle = {
                width: w6,
                height: h6,
                top: props.element.position.y*24/20,
                left: props.element.position.x*24/20,
            }
            let width: number = (w6 - 6) 
            let heigth: number = (h6 - 6)
            return (
                <svg style={elementStyle} className = {styles.element}>
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
}


export default connect(mapStateToProps, mapDispatchToProps)(MaxElement);
//