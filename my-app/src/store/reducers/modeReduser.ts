import { Reducer } from "react"
import { setNewId } from "../../functions/functions"
import { ActionType, Mode, Slide } from "../../types"

const mode: Reducer<Mode, any> = (state: Mode = 'editor', action: ActionType): Mode => {
    return state
};  

export default mode