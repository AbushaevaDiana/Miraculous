import { Reducer } from "react"
import { setNewId } from "../../functions/functions"
import { ActionType, History, Mode, Slide } from "../../types"

const history: Reducer<History, any> = (state: History = { actionlist: [], currentIndex: -1 }, action: ActionType): History => {
    switch (action.type) {
        case 'Undo':
          console.log('undo work')
          return state
        default:
          return state
        }
};  

export default history