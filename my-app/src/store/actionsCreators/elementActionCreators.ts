import { Position, SelectionType, StateTypes } from "../../types";

function changeTextContent(selection: SelectionType, content: string) {
    return {
      type: StateTypes.CHANGE_TEXT_CONTENT,
      payload: {
          selection,
          content
        }
    }
  }

function moveElement(selection: SelectionType, position: Position) {
    return {
      type: StateTypes.MOVE_ELEMENT,
      payload: {
          selection,
          position
        }
    }
}

function gotoElement(idElement: Number) {
  return {
      type: StateTypes.GOTO_ELEMENT,
      payload: idElement,
  }
}

function deleteElement(selection: SelectionType) {
  return {
      type: StateTypes.DELETE_ELEMENT,
      payload: selection,
  }
}

function addText() {
  return {
    type: StateTypes.ADD_TEXT,
  }
}

export {changeTextContent, moveElement, gotoElement, deleteElement, addText}
