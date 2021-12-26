import { StateTypes } from "../../types";
import { connect } from 'react-redux';

function addSlide() {
    return {
      type: StateTypes.ADD_SLIDE
    }
  }
  
// function moveSlide(curPos: number) {
//     return {
//         type: StateTypes.MOVE_SLIDE,
//         payload: curPos,
//     }
// }

function deleteSlide(idSlides: Number[]) {
    return {
        type: StateTypes.DELETE_SLIDE,
        payload: idSlides,
    }
}

function gotoSlide(idSlide: Number) {
    return {
        type: StateTypes.GOTO_SLIDE,
        payload: idSlide,
    }
}


export { addSlide, deleteSlide, gotoSlide }


/////////////
// dispatchEvent(gotoSlide(4));