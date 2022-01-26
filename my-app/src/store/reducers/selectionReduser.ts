import { Reducer } from "react"
import { ActionType, SelectionType } from "../../types"


const selection: Reducer<SelectionType, any> = (state: SelectionType = {idSlides: [], idElements: [] }, action: ActionType): SelectionType => {
    switch (action.type) {
        case 'GOTO_SLIDE':
            return {
                    idSlides: [action.payload],
                    idElements: []
                };
        case 'GOTO_SLIDES':
            return {
                    idSlides: state.idSlides.concat([action.payload]), 
                    idElements: []
                };
        case 'GOTO_ELEMENT':
            return {
                  idSlides: state.idSlides,
                  idElements: action.payload,
              };      
        case 'DELETE_SLIDE':
            return {
              idSlides: [], 
              idElements: []
            };
        case 'Undo':
          return action.payload.selection;
        case 'Redo':
          return action.payload.selection;
        default:
          return state
        }
};  

export default selection