import { StateTypes } from "../../types";

function changePresentationNAME(name: string) {
    return {
      type: StateTypes.CHANGE_PRESENTATION_NAME,
      payload: name,
    }
  }
export {changePresentationNAME}
