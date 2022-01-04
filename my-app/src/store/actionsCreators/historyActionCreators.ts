import { Presentation, PresentationMaker, SelectionType, StateTypes } from "../../types";

function undo() {
    return {
      type: StateTypes.Undo,
    }
  }

function addActionToHistory(presentation: Presentation, selection: SelectionType) {
  return {
    type: StateTypes.ADD_ACTION_TO_HISTORY,
    payload: {
        presentation,
        selection
    }
  }
}
  
export {undo, addActionToHistory}
