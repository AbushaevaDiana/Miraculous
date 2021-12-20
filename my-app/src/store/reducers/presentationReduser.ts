import { Reducer } from "react";
import { ActionType, Presentation } from "../../types";
import { slides } from './slideReduce';

let presentationReduser: Reducer<Presentation, ActionType> = (state: Presentation, action: ActionType): Presentation => {
    return {
        name: state.name,
        slidelist: slides(state.slidelist, action)
    }
}

export default {presentationReduser}