import { ActionType, Presentation } from "../../types";
import { slides } from './slideReduce';

let presentationRedusers = (state: Presentation, action: ActionType) => {
    return{
        name: state.name,
        slides: slides(state.slidelist, action)
    }
}

export {presentationRedusers}