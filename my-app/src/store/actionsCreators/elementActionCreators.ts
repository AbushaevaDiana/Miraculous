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

function moveElementX(selection: SelectionType, x: Number) {
  return {
    type: StateTypes.MOVE_ELEMENT_X,
    payload: {
        selection,
        x,
      }
  }
}

function moveElementY(selection: SelectionType, y: Number) {
  return {
    type: StateTypes.MOVE_ELEMENT_Y,
    payload: {
        selection,
        y,
      }
  }
}

function changeElementHeigth(selection: SelectionType, h: Number) {
  return {
    type: StateTypes.CHANGE_ELEMENT_HEIGTH,
    payload: {
        selection,
        h,
      }
  }
}

function changeElementWeigth(selection: SelectionType, w: Number) {
  return {
    type: StateTypes.CHANGE_ELEMENT_WEIGTH,
    payload: {
        selection,
        w,
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

function changeFillColor(selection: SelectionType, color: string) {
  return {
      type: StateTypes.CHANGE_FILL_COLOR,
      payload: {
          selection,
          color,
      }
  }
}


function changeLineColor(selection: SelectionType, color: string) {
  return {
      type: StateTypes.CHANGE_LINE_COLOR,
      payload: {
          selection,
          color,
      }
  }
}

function changeTextColor(selection: SelectionType, color: string) {
  return {
      type: StateTypes.CHANGE_TEXT_COLOR,
      payload: {
          selection,
          color,
      }
  }
}


function changeBorderColor(selection: SelectionType, color: string) {
  return {
      type: StateTypes.CHANGE_BORDER_COLOR,
      payload: {
          selection,
          color,
      }
  }
}

export {changeTextContent, moveElement, gotoElement, 
       deleteElement, addText, addPicture, addRound, 
       addRectangle, addTriangle, changeFillColor, changeLineColor,
       changeTextColor, changeBorderColor, changeElementWeigth,
       changeElementHeigth, moveElementX, moveElementY}
