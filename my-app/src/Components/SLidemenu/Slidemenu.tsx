import '../../App.css';
import styles from './Slidemenu.module.css';
import { connect } from 'react-redux';
import { Presentation, Slide } from '../../types';
import { SlideView } from '../Slide/Slide';
import { addSlide, deleteSlide, gotoSlide } from '../../store/actionsCreators/slideActionCreators'
import  store  from '../../store/store'

interface SlidemenuList {
    slidelist: Array<Slide>
}

export function Slidemenu(props: SlidemenuList){
        return (
            <>  
               <div className={styles.slidemenu}>
               <ul className={styles.slidemenuList}> 
                 {props.slidelist.map(slide => <SlideView slide = {slide}></SlideView>)}
               </ul>
                   <div className={styles.imglogo} ></div>
               </div>
            </>
        )
};

//
function mapStateToProps(state: Presentation) {
    return { props: state.slidelist} 
};

const mapDispatchToProps = {
    addSlide,
}

export default connect(mapStateToProps, mapDispatchToProps)(Slidemenu);
//