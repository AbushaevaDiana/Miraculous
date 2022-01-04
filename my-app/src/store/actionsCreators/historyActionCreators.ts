import { Presentation, PresentationMaker, SelectionType, StateTypes } from "../../types";

function undo() {
    return {
      type: StateTypes.Undo,
    }
  }

function redo() {
  return {
    type: StateTypes.Redo,
  }
}  
  
export {undo, redo}
