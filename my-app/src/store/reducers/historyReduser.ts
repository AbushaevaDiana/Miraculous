import { Reducer } from "react"
import { ActionType, History} from "../../types"
import { saveToHistory } from "../../functions/addActionToHistory";

const history: Reducer<History, any> = (state: History = { actionlist: [], currentIndex: -1 }, action: ActionType): History => {
    switch (action.type) {
        case 'ADD_TO_HISTORY':
          return saveToHistory(state, action.payload.presentation, action.payload.selection);
        case 'Undo':
          return action.payload.history;
        case 'Redo':
          return action.payload.history;
        default:
          return state
        }
};  

export default history