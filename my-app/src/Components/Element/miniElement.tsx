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
            width: (props.element.size.w/6),
            height: (props.element.size.h/6),
            top: props.element.position.y/6,
            left: props.element.position.x/6,
            borderStyle: props.element.border.borderStyle,
            borderColor: props.element.border.color,
            borderWidth: props.element.border.width/6,
         }
         let textStyle = {
             color: props.element.elementConcept.color,
             fontSize: props.element.elementConcept.size/6,
             fontFamily: props.element.elementConcept.font,
             textDecoration: fU,
             fontStyle: fI,
             fontWeight: fW,
             border: 'none'
         }
       return (
        <>
            <div id={String(props.element.idElement)} className={styles.element} style = {elementStyle}>
            <textarea disabled className={styles.text}  style = {textStyle} value={props.element.elementConcept.textContent} />
                {/* <p className={styles.text}  style = {textStyle}>{props.element.elementConcept.textContent}</p> */}
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
            width: (props.element.size.w/6),
            height: (props.element.size.h/6),
            top: props.element.position.y/6,
            left: props.element.position.x/6,
            borderWidth: props.element.border.width/6,
            borderStyle: props.element.border.borderStyle,
            borderColor: props.element.border.color,
         }
        return (
         <>              
            <img id={String(props.element.idElement)} className = {styles.element} style={elementStyle} src={src} alt={String(props.element.idElement)} /> 
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
                <svg id={String(props.element.idElement)} style={elementStyle} className = {styles.element}>
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
               <svg id={String(props.element.idElement)} style={elementStyle} className = {styles.element}>
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
                <svg id={String(props.element.idElement)} style={elementStyle} className = {styles.element}>
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