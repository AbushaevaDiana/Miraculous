import {Presentation, StateTypes } from "../../types";

function savePresentation() {
    return {
        type: StateTypes.SAVE_PRESENTATION,
    }
}

function openPresentation(newPresentation: Presentation) {
    return{
        type: StateTypes.OPEN_PRESENTATION,
        payload: newPresentation
    }
}

export {savePresentation, openPresentation}
