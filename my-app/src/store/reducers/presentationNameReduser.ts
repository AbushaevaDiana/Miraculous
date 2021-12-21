import { Reducer } from "react"
import { ActionType} from "../../types"

const name: Reducer<string, any> = (state: string = '', action: ActionType): string => {
    if (action.type === 'CHANGE_PRESENTATION_TITLE') { 
        return action.title 
    } else { 
        return state 
    } 
};

export default name
