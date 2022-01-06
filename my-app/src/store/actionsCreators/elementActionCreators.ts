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

function addPicture(src: string) {
  return {
    type: StateTypes.ADD_PICTURE,
    payload: src
  }
}

function addRound() {
  return {
    type: StateTypes.ADD_ROUND,
  }
}

function addRectangle() {
  return {
    type: StateTypes.ADD_RECTANGLE,
  }
}

function addTriangle() {
  return {
    type: StateTypes.ADD_TRIANGLE,
  }
}

export {changeTextContent, moveElement, gotoElement, deleteElement, addText, addPicture, addRound, addRectangle, addTriangle}
