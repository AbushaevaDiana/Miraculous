/*import { Reducer } from "react"
import { setNewId } from "../../functions/functions";
import { ActionType, ElementType} from "../../types"


const elementlist: Reducer<Array<ElementType>, any> = (state: ElementType[] = [], action: ActionType): ElementType[] => {
    switch (action.type) {
    case 'CHANGE_TEXT_CONTENT':
        console.log('change text work')
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
    case 'MOVE_ELEMENT':
        console.log('move work')
        return state.map(element => {
            if (element.idElement === action.payload.idElements)
            { 
                return{
                    ...element,
                    position: action.payload.position
                }
            } else { 
                return element
              }
        });
    case 'ADD_TEXT':
        console.log('add element work')
        return state.concat([{
            size: {
                h: 100,
                w: 100,
            },
            border: {
                color: {
                    type: 'color',
                    color: '#000000',
                },
                borderStyle: 'none',
                width: 5,
            },
            position: {
                x: 0,
                y: 0,
            },
            elementConcept: {
                type: 'text',
                color: {
                    type: 'color',
                    color: '#000000',
                },
                textContent: 'Текст',
                links: '',
                size: 12,
                font: 'TimesNewRoman',
                italic: false,
                bold: false,
                underline: false,
            },
            idElement: setNewId(),
            selected: false,
        }]);
    case 'DELETE_ELEMENT':
      console.log('delete element work')
      return state.filter(element => element.idElement !== action.payload);
    default:
      return state
    }
};

export default elementlist;*/
export{}