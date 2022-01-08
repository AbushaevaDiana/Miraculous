import { Reducer } from "react"
import { setNewId } from "../../functions/functions"
import { ActionType, Mode, Slide } from "../../types"

const mode: Reducer<Mode, any> = (state: Mode = 'editor', action: ActionType): Mode => {
    switch (action.type) {
        case 'CHANGE_MODE':
          console.log('change mode')
          if(state === 'editor'){return 'preview'}
          else{ return 'editor'}
        default:
          return state
        }
};  

export default mode