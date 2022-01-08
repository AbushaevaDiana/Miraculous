import '../../App.css';
import styles from './Element.module.css';
import { PresentationMaker, SelectionType, Slide, Color, ElementType, Size, Position } from '../../types';
import { connect } from 'react-redux';

interface miniElementProps{
    element: ElementType,
};

export function MiniElement(props: miniElementProps){ 
//Текстовый элемент
    let textI: string = '';   
    if(props.element.elementConcept.type === 'text'){
       textI = props.element.elementConcept.textContent;
       console.log(props.element.elementConcept.textContent)
       let fW: string = 'normal'
       if(props.element.elementConcept.bold === true){
        fW = 'bold'
       }
       let bColor: string = 'transparent'
       if(props.element.border.borderStyle !== 'none'){
           bColor = props.element.border.color
       }
       let elementStyle = {
           font: props.element.elementConcept.font,
           fontWeight: fW,
           color: props.element.elementConcept.color,
           width: (props.element.size.w/5),
           height: (props.element.size.h/5),
           borderColor: bColor,
           top: props.element.position.y/6,
           left: props.element.position.x/6,
           fontSize: props.element.elementConcept.size/6,
        }
       return (
        <>
            <textarea style = {elementStyle} className={styles.text}  defaultValue={textI}/>
        </>
     )
    }
//Картинка
    if(props.element.elementConcept.type === 'img') {
        let src: string = props.element.elementConcept.src;
        console.log(src);
        let elementStyle = {
            width: (props.element.size.w/6),
            height: (props.element.size.h/6),
            top: props.element.position.y/6,
            left: props.element.position.x/6,
         }
        return (
         <>
           <div className = {styles.element}>               
               <img src={src} style={elementStyle} alt={String(props.element.idElement)} /> 
            </div>
         </>
      )
     }
//Фигуры
    if (props.element.elementConcept.type === 'figure') {
        if (props.element.elementConcept.figureConcept === 'Round') {
            let elementStyle = {
                width: (props.element.size.w/6),
                height: (props.element.size.h/6),
                top: props.element.position.y/6,
                left: props.element.position.x/6,
            }
            let width: number = props.element.size.w/12 
            let heigth: number = props.element.size.h/12
            return (
                <svg style={elementStyle} className = {styles.element}>
                    <ellipse rx={width-1} ry={heigth-1} cx={width} cy={heigth} 
                    fill={props.element.elementConcept.fillcolor} 
                    stroke={props.element.elementConcept.linecolor} strokeWidth="1"/>
                </svg>               
            )
        }
        if (props.element.elementConcept.figureConcept === 'Triangel') {
            let w6: number = props.element.size.w/6
            let h6: number = props.element.size.h/6
            let elementStyle = {
                width: w6,
                height: h6,
                left: props.element.position.x/6,
                top: props.element.position.y/6,
            }
            let x1: string = String(w6/46)
            let x2: string = String(w6/2 )
            let x3: string = String(w6 - 1 ) 
            let y1: string = String(h6 - 1)
            let y2: string = String(h6/28 )
            let y3: string = String(h6 - 1 )
            let point: string = x1+','+y1+' '+x2+','+y2+' '+x3+','+y3
            return (
               <svg style={elementStyle} className = {styles.element}>
                  <polygon points={point} fill={props.element.elementConcept.fillcolor} 
                  stroke={props.element.elementConcept.linecolor} stroke-width="1"/>
               </svg>             
            )
        }
        if (props.element.elementConcept.figureConcept === 'Rectangel') {
            let w6: number = props.element.size.w/6
            let h6: number = props.element.size.h/6
            let elementStyle = {
                width: w6,
                height: h6,
                top: props.element.position.y/6,
                left: props.element.position.x/6,
            }
            let width: number = (w6 - 2) 
            let heigth: number = (h6 - 2)
            return (
                <svg style={elementStyle} className = {styles.element}>
                      <rect x="1" y="1" width={width} height={heigth} 
                      fill={props.element.elementConcept.fillcolor} 
                      stroke={props.element.elementConcept.linecolor} stroke-width="1"/>
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


export default connect(mapStateToProps, mapDispatchToProps)(MiniElement);
//