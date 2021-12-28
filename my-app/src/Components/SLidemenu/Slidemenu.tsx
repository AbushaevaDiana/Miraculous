import '../../App.css';
import styles from './Slidemenu.module.css';
import { connect } from 'react-redux';
import { Presentation, PresentationMaker, Slide } from '../../types';
import  SlideView  from '../Slide/Slide';
import { addSlide, deleteSlide, gotoSlide } from '../../store/actionsCreators/slideActionCreators'
import  store  from '../../store/store'


interface SlidemenuList {
    slidelist: Array<Slide>,
    gotoSlide: (idSlide: Number) => void,
}

function Slidemenu(props: SlidemenuList){
        return (
            <>  
               <div className={styles.slidemenu}>
               <ul className={styles.slidemenuList}> 
                 {props.slidelist.map(slide => <SlideView slide = {slide}  gotoSlide = {props.gotoSlide}></SlideView>)}
               </ul>
                   <div className={styles.imglogo} ></div>
               </div>
            </>
        )
};

//
function mapStateToProps(state: PresentationMaker) {
    console.log(state)
    return { slidelist: state.presentation.slidelist} 
};

const mapDispatchToProps = {
    gotoSlide
}

export default connect(mapStateToProps)(Slidemenu);
//