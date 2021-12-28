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
          color: '#ffffff'
        },
        effects: 'occurrence',
      }])
    case 'DELETE_SLIDE':
      return state.filter(slide => slide.idSlide !== action.payload)
    case 'GOTO_SLIDE':
      return state.map(slide => {
        if (slide.idSlide === action.payload)
        { 
          return {
            ...slide,
            background: {
              ...slide.background,
              color: '#98FB98'
            }
          } 
        } else { 
            return {
              ...slide,
              background: {
                ...slide.background,
                color: '#FFFFFF'
              }
            } 
          }
    })
    default:
      return state
    }
};  

export default slidelist