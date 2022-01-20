import { Reducer } from "react"
import { setNewId } from "../../functions/functions"
import { ActionType, History, Mode, Slide } from "../../types"
import { saveToHistory } from "../../functions/addActionToHistory";
import { undo, redo } from "../../functions/history_function";

const history: Reducer<History, any> = (state: History = { actionlist: [], currentIndex: -1 }, action: ActionType): History => {
    switch (action.type) {
        case 'ADD_TO_HISTORY':
          // console.log('add to history work')
          return saveToHistory(state, action.payload.presentation, action.payload.selection);
        case 'Undo':
          // console.log('undo h', action.payload) 
          return action.payload.history;
        case 'Redo':
          // console.log('redo h', action.payload) 
          return action.payload.history;
        default:
          return state
        }
};  

export default history