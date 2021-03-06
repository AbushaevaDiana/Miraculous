import { Reducer } from "redux";
import { combineReducers } from "redux";
import presentationReduser from "./presentationReduser";
import modeReduser from "./modeReduser";
import historyReduser from "./historyReduser";
import selectionReduser from "./selectionReduser";


//selection

const rootReducer: Reducer = combineReducers({
    presentation: presentationReduser, 
    mode: modeReduser, 
    history: historyReduser,
    selection: selectionReduser,
})

export default rootReducer