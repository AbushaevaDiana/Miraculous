import { Reducer } from "react"
import { setNewId } from "../../functions/functions"
import { ActionType, Slide } from "../../types"

const slidelist: Reducer<Array<Slide>, any> = (state: Array<Slide> = [], action: ActionType): Slide[] => {
    switch (action.type) {
    case 'ADD_SLIDE':
      return state.concat([{ 
        elementlist: [],
        idSlide: setNewId(),
        background: {
          type: 'color',
          color: '#FFFFFF'
        },
        effects: 'occurrence',
        selected: false,
      }])
    case 'DELETE_SLIDE':
      return state.filter(slide => slide.idSlide !== action.payload)
      case 'GOTO_SLIDE':
        return state.map(slide => {
          if (slide.idSlide === action.payload)
          { 
            return {
              ...slide,
              selected: true 
            } 
          } else { 
              return {
                ...slide,
                selected: false
              } 
            }
      })
    default:
      return state
    }
};  

export default slidelist