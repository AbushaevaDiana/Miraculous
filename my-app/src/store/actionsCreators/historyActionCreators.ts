import { Editer, Presentation, PresentationMaker, SelectionType, StateTypes } from "../../types";

function undoAct(presentationMaker: PresentationMaker) {
    return {
      type: StateTypes.Undo,
      payload: presentationMaker,
    }
  }

function redoAct(presentationMaker: PresentationMaker) {
  return {
    type: StateTypes.Redo,
    payload: presentationMaker,
  }
} 

function addToHistory(presentation: Presentation, selection: SelectionType){
  return{
    type: StateTypes.ADD_TO_HISTORY,
    payload: {
      presentation,
      selection
    }
  }
}
  
export {undoAct, redoAct, addToHistory}
