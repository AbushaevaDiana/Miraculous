import { Reducer } from "react"
import { ActionType} from "../../types"

const name: Reducer<string, any> = (state: string = '', action: ActionType): string => {
    switch (action.type) {
    case 'CHANGE_PRESENTATION_NAME':
      return action.payload;
    default:
      return state
    }
};

export default name