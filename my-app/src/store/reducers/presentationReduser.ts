import { Reducer } from "redux";
import { combineReducers } from "redux";
import { ActionType, Presentation } from "../../types";
import name from "./presentationNameReduser";
import  presentationNameReduser  from "./presentationNameReduser";
import slidelist from "./slideReduce";
import slidelistReduser from "./slideReduce";

const stateStart: Presentation = {
    slidelist: [
        {
            elementlist:[], 
            background:{
                type: 'color', 
                color: '#FFFFFF'},
            effects: 'fading',
            idSlide: 1
        },   
    ],
    name: 'Презентация без названия',
}

const presentation: Reducer<Presentation, any> = (state: Presentation = stateStart, action: ActionType): Presentation => {
    return{
        slidelist: slidelist(state.slidelist, action),
        name: name(state.name, action),
    }
};  

export default presentation



//const rootReducer: Reducer = combineReducers({slidelist: slidelistReduser, name: presentationNameReduser})

//export default rootReducer