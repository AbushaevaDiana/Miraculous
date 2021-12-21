import { Reducer } from "react";
import { combineReducers } from "redux";
import { ActionType, Presentation } from "../../types";
import  presentationNameReduser  from "./presentationNameReduser";
import slidelistReduser from "./slideReduce";

export const state: Presentation = {
    slidelist: [
        {
            elementlist:[], 
            background: '#FFFFFF',
            effects: 'fading',
            idSlide: 1,
        },   
    ],
    name: 'NoName',
}


const rootReducer = combineReducers({slides: slidelistReduser, name: presentationNameReduser})

export default rootReducer