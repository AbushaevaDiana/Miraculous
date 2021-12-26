import { Reducer } from "react"
import { ActionType, SelectionType } from "../../types"

const selection: Reducer<SelectionType, any> = (state: SelectionType = {idSlides: [], idElements: [] }, action: ActionType): SelectionType => {
    switch (action.type) {
        case 'GOTO_SLIDE':
            console.log('slides work!', action.payload)
            return {
                    idSlides: action.payload,
                    idElements: []
                };
        default:
          return state
        }
};  

export default selection