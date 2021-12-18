import { setNewId } from "../../functions/functions"
import { ActionType, Slide } from "../../types"

const slides = (state: Array<Slide> = [], action: ActionType) => {
    switch (action.type) {
    case 'ADD_SLIDE':
      return state.concat([{ 
        elementlist: [],
        idSlide: setNewId(),
        background: '#ffffff',
        effects: 'occurrence',
      }])
    case 'DELETE_SLIDE':
      return state.filter(slide => action.slideId != slide.idSlide)
    default:
      return state
    }
}  

export {slides}