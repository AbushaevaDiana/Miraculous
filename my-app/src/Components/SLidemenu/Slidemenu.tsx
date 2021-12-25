import '../../App.css';
import styles from './Slidemenu.module.css';
import { connect } from 'react-redux';
import { Presentation, Slide } from '../../types';
import { SlideView } from '../Slide/Slide';
import { addSlide, deleteSlide, gotoSlide } from '../../store/actionsCreators/slideActionCreators'
import  store  from '../../store/store'

interface SlidemenuList {
    slidelist: Array<Slide>,
}

function Slidemenu(props: SlidemenuList){
        return (
            <>  
               <div className={styles.slidemenu}>
               <ul className={styles.slidemenuList}> 
                 {props.slidelist.map(slide => <li key={slide.idSlide} className={styles.slidemenuListSlide}></li>)}
               </ul>
                   <div className={styles.imglogo} ></div>
               </div>
            </>
        )
};

//
function mapStateToProps(state: Presentation) {
    console.log(state)
    return { slidelist: state.slidelist} 
};

// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps)(Slidemenu);
//