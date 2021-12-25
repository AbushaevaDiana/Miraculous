import { Reducer } from "react"
import { setNewId } from "../../functions/functions"
import { ActionType, History, Mode, Slide } from "../../types"

const history: Reducer<History, any> = (state: History = { actionlist: [], currentIndex: -1 }, action: ActionType): History => {
    return state
};  

export default history