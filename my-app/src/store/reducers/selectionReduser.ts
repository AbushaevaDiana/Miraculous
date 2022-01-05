import { Reducer } from "react"
import { ActionType, SelectionType } from "../../types"

const selection: Reducer<SelectionType, any> = (state: SelectionType = {idSlides: [], idElements: [] }, action: ActionType): SelectionType => {
    switch (action.type) {
        case 'GOTO_SLIDE':
            return {
                    idSlides: action.payload,
                    idElements: []
                };
        case 'GOTO_ELEMENT':
          console.log('elements work!', action.payload)
            return {
                  idSlides: state.idSlides,
                  idElements: action.payload,
              };      
        case 'DELETE_SLIDE':
            return {
              idSlides: [], 
              idElements: []
            };
        default:
          return state
        }
};  

export default selection