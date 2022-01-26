import { Reducer } from "react"
import { ActionType, Mode} from "../../types"

const mode: Reducer<Mode, any> = (state: Mode = 'editor', action: ActionType): Mode => {
    switch (action.type) {
        case 'CHANGE_MODE':
          if(state === 'editor'){return 'preview'}
          else{ return 'editor'}
        default:
          return state
        }
};  

export default mode