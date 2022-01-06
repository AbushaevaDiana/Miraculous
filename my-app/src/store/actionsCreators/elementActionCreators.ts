import { StateTypes } from "../../types";

function changeTextContent(idElements: Number[], content: string) {
    return {
      type: StateTypes.CHANGE_TEXT_CONTENT,
      payload: {
          idElements,
          content
        }
    }
  }

  function changeElemPosition(newX: number, newY: number, idElements: Number) {
    return {
      type: StateTypes.CHANGE_ELEM_POSITION,
      payload: {newX, newY, idElements}
    }
  }
export {changeTextContent, changeElemPosition}
