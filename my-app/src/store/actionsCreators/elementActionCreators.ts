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
export {changeTextContent}
