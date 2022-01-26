import '../../App.css';
import styles from './Slidemenu.module.css';
import { connect } from 'react-redux';
import { PresentationMaker, Slide } from '../../types';
import  SlideView  from '../Slide/Slide';
import { moveSlide} from '../../store/actionsCreators/slideActionCreators'
import { useState } from 'react';


interface SlidemenuList {
    slidelist: Array<Slide>,
    moveSlide: (start: Slide, end: Slide) => void,
}

function Slidemenu(props: SlidemenuList){
    let [currentSlide, setCurrentSlide] = useState<Slide>(props.slidelist[0]);
     function onDragStartHangler(e: React.DragEvent<HTMLDivElement>, slide: Slide){
        setCurrentSlide(slide);
     }
     function onDragLeaveHangler(e: React.DragEvent<HTMLDivElement>){}
     function onDragEndHangler(e: React.DragEvent<HTMLDivElement>){}
     function onDragOverHangler(e: React.DragEvent<HTMLDivElement>){
       e.preventDefault();
       
     }
     function onDropHangler(e: React.DragEvent<HTMLDivElement>, slide: Slide){
        e.preventDefault();
        props.moveSlide(currentSlide, slide);
     }
        return (
            <>  
               <div className={styles.slidemenu}>
               <ul className={styles.slidemenuList}> 
                 {props.slidelist.map(slide =>
                     <div key = {slide.idSlide}  className ={styles.slidemenuListSlide}  
                     onDragStart = {(e) => onDragStartHangler(e, slide)}
                     onDragLeave = {(e) => onDragLeaveHangler(e)}
                     onDragEnd ={(e) => onDragEndHangler(e)}
                     onDragOver = {(e) => onDragOverHangler(e)}
                     onDrop = {(e) => onDropHangler(e, slide)}>
                     <SlideView slide = {slide} index = {props.slidelist.indexOf(slide)+1}></SlideView>
                     </div>)}
               </ul>
                   <div className={styles.imglogo} ></div>
               </div>
            </>
        )
};


function mapStateToProps(state: PresentationMaker) {
    return { slidelist: state.presentation.slidelist} 
};

const mapDispatchToProps = {
    moveSlide,
}

export default connect(mapStateToProps, mapDispatchToProps)(Slidemenu);
