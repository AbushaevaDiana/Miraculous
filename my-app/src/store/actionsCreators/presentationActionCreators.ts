import {Presentation, StateTypes } from "../../types";

function exportPresentation() {
    return {
        type: StateTypes.EXPORT_PRESENTATION,
    }
}

function openPresentation(newPresentation: Presentation) {
    return{
        type: StateTypes.OPEN_PRESENTATION,
        payload: newPresentation
    }
}

function savePresentation() {
    return{
        type: StateTypes.SAVE_PRESENTATION,
    }
}

export {savePresentation, openPresentation, exportPresentation}
