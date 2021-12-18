import { StateTypes } from "../../types";
import { connect } from 'react-redux';

export { addSlide, deleteSlide, gotoSlide }

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

function deleteSlide(idSlide: Number) {
    return {
        type: StateTypes.DELETE_SLIDE,
        idSlide,
    }
}

function gotoSlide(idSlide: Number) {
    return {
        type: 'GOTO_SLIDE',
        idSlide,
    }
}





/////////////
// dispatchEvent(gotoSlide(4));