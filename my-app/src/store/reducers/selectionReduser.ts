import { Reducer } from "react"
import { setNewId } from "../../functions/functions"
import { ActionType, History, PresentationMaker, SelectionType } from "../../types"

const selection: Reducer<SelectionType, any> = (state: SelectionType = {idSlides: [], idElements: [] }, action: ActionType): SelectionType => {
    switch (action.type) {
        case 'GOTO_SLIDE':
            console.log('slides work!')
            return {
                    idSlides: action.payload,
                    idElements: []
                };
        default:
          return state
        }
};  

export default selection