import { Position, SelectionType, Size, StateTypes } from "../../types";

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

function resizeElement(selection: SelectionType, size: Size) {
  return {
    type: StateTypes.RESIZE_ELEMENT,
    payload: {
        selection,
        size,
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

function setTextBold(selection: SelectionType) {
  return {
      type: StateTypes.SET_TEXT_BOLD,
      payload: selection
  }
}

function setTextItalic(selection: SelectionType) {
  return {
      type: StateTypes.SET_TEXT_ITALIC,
      payload: selection
  }
}

function setTextUnderline(selection: SelectionType) {
  return {
      type: StateTypes.SET_TEXT_UNDERLINE,
      payload: selection
  }
}

function changeTextFont(selection: SelectionType, font: string) {
  return {
      type: StateTypes.CHANGE_TEXT_FONT,
      payload: {
          selection,
          font,
      }
  }
}

function changeTextSize(selection: SelectionType, size: number) {
  return {
      type: StateTypes.CHANGE_TEXT_SIZE,
      payload: {
          selection,
          size,
      }
  }
}

function changeBorderSize(selection: SelectionType, size: number) {
  return {
      type: StateTypes.CHANGE_BORDER_WIDTH,
      payload: {
          selection,
          size,
      }
  }
}

function setImageFilter(selection: SelectionType, filter: string) {
  return {
      type: StateTypes.SET_IMAGE_FILTER,
      payload: {
          selection,
          filter,
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

function changeElementBorder(selection: SelectionType, style: string) {
  return {
      type: StateTypes.CHANGE_ELEMENT_BORDER,
      payload: {
          selection,
          style,
      }
  }
}

export {changeTextContent, moveElement, resizeElement, gotoElement, 
       deleteElement, addText, addPicture, addRound, 
       addRectangle, addTriangle, changeFillColor, changeLineColor,
       changeTextColor, changeBorderColor, changeElementWeigth,
       changeElementHeigth, moveElementX, moveElementY,
       setImageFilter, changeElementBorder, changeTextSize, changeBorderSize,
      changeTextFont, setTextUnderline, setTextItalic, setTextBold}
