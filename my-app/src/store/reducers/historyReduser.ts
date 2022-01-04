import { Reducer } from "react"
import { setNewId } from "../../functions/functions"
import { ActionType, History, Mode, Slide } from "../../types"

const history: Reducer<History, any> = (state: History = { actionlist: [], currentIndex: -1 }, action: ActionType): History => {
    switch (action.type) {
        case 'ADD_ACTION_TO_HISTORY':
          console.log('add to history work')
          return{
              ...state,
              actionlist: state.actionlist.concat([action.payload]),
              currentIndex: (state.currentIndex+1)
          }
        default:
          return state
        }
};  

export default history