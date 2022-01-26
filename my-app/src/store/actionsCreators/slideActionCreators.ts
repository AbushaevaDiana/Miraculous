import { Slide, StateTypes } from "../../types";

function addSlide() {
    return {
      type: StateTypes.ADD_SLIDE
    }
}

function addSlideEffect(effect: string) {
    return {
      type: StateTypes.ADD_SLIDE_EFFECT,
      payload: effect,
    }
}
 
function editSLideBackgroundColor(idSlides: Number[], newBackground: string) {
    return {
        type: StateTypes.EDIT_SLIDE_BACKGROUND_COLOR,
        payload: {
            idSlides,
            newBackground,
        }
    }
}

function editSLideBackgroundImg(idSlides: Number[], newBackground: string) {
    return {
        type: StateTypes.EDIT_SLIDE_BACKGROUND_IMG,
        payload: {
            idSlides,
            newBackground,
        }
    }
}

function moveSlide(start: Slide, end: Slide) {
    return {
        type: StateTypes.MOVE_SLIDE,
        payload: {
            start,
            end,
        }
            
    }
}

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

function gotoSlides(idSlide: Number) {
    return {
        type: StateTypes.GOTO_SLIDES,
        payload: idSlide,
    }
}


export { addSlide, deleteSlide, gotoSlide, editSLideBackgroundColor, editSLideBackgroundImg,
     gotoSlides, addSlideEffect, moveSlide}


/////////////
// dispatchEvent(gotoSlide(4));