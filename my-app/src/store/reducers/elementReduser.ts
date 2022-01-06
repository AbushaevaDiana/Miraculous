import { Reducer } from "react"
import { ActionType, ElementType} from "../../types"

const elementlist: Reducer<Array<ElementType>, any> = (state: ElementType[] = [], action: ActionType): ElementType[] => {
    switch (action.type) {
    case 'CHANGE_TEXT_CONTENT':
        return state.map(element => {
            if (element.idElement === action.payload.idElements)
            { 
                return{
                    ...element,
                    elementConcept: {
                        ...element.elementConcept,
                        textContent: action.payload.content,
                    } 
                }
            } else { 
                return element
              }
        });
    case 'CHANGE_ELEM_POSITION':
        return state.map(element => {
            if (element.idElement === action.payload.idElements)
            { 
                return { 
                    ...element,
                    position: {
                        x: action.payload.newX,
                        y: action.payload.newY,
                    }

                }
            } else {
                return element
            }
        });
    default:
      return state
    }
};

export default elementlist;