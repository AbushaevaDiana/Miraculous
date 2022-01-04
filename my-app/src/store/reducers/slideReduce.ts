import { Reducer } from "react"
import { setNewId } from "../../functions/functions"
import { ActionType, Slide } from "../../types"

const slidelist: Reducer<Array<Slide>, any> = (state: Array<Slide> = [], action: ActionType): Slide[] => {
    switch (action.type) {
    case 'ADD_SLIDE':
      console.log('add work')
      return state.concat([{ 
        elementlist: [],
        idSlide: setNewId(),
        background: {
          type: 'color',
          color: '#FFFFFF'
        },
        effects: 'occurrence',
        selected: false,
      }]);
    case 'DELETE_SLIDE':
      console.log('delete work')
      return state.filter(slide => slide.idSlide !== action.payload);
    case 'GOTO_SLIDE':
      console.log('goto work')
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
      });
    case 'EDIT_SLIDE_BACKGROUND_COLOR':
      console.log('color change work')
        return state.map(slide => {
          if (slide.idSlide === action.payload.idSlides)
          { 
            return {
              ...slide,
              background: {
                ...slide.background,
                color: action.payload.newBackground,
              }
            } 
          } else { 
              return slide
            }
      });
    default:
      return state
    }
};  

export default slidelist