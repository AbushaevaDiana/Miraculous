import { type } from "os";
import { Reducer } from "react"
import { setNewId } from "../../functions/functions"
import { ActionType, Figure, Slide } from "../../types"

let round: Figure = {
  type: 'figure',
  linecolor: '#000000',
  fillcolor: '#ADFF2F',
  figureConcept: 'Round',
}
const slidelist: Reducer<Array<Slide>, any> = (state: Array<Slide> = [], action: ActionType): Slide[] => {
    switch (action.type) {
    case 'ADD_SLIDE':
      console.log('add slide work')
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
      console.log('back color change work')
        return state.map(slide => {
          if (slide.idSlide === action.payload.idSlides)
          { 
            return {
              ...slide,
              background: {
                type: 'color',
                color: action.payload.newBackground,
              }
            } 
          } else { 
              return slide
            }
      });
      case 'EDIT_SLIDE_BACKGROUND_IMG':
        console.log('back img work', action.payload.newBackground)
          return state.map(slide => {
            if (slide.idSlide === action.payload.idSlides)
            { 
              return {
                ...slide,
                background: {
                  type: 'img',
                  src: action.payload.newBackground,
                  filter: 'none',
                }
              } 
            } else { 
                return slide
              }
        });
      case 'CHANGE_TEXT_CONTENT':
        console.log('change text work')
        return state.map(slide => {
          if (slide.idSlide === action.payload.selection.idSlides)
          { 
            return {
              ...slide,
              elementlist: slide.elementlist.map(element => {
                if(element.idElement === action.payload.selection.idElements){
                  return {
                    ...element,
                    elementConcept: {
                        ...element.elementConcept,
                        textContent: action.payload.content,
                    } 
                }
                } else { return element}
              }) 
            } 
          } else { 
              return slide
            }
      });
      case 'GOTO_ELEMENT':
        console.log('goto element work')
        return state.map(slide => {
          if (slide.selected === true)
          { 
            return {
              ...slide,
              elementlist: slide.elementlist.map(element => {
                if(element.idElement === action.payload){
                  return {
                    ...element,
                    selected: true 
                }
                } else { 
                  return {
                    ...element,
                    selected: false 
                }
                }
              }) 
            } 
          } else { 
              return slide
            }
      });
    case 'MOVE_ELEMENT':
        console.log('move work')
        return state.map(slide => {
          if (slide.idSlide === action.payload.idSlides)
          { 
            return {
              ...slide,
              elementlist: slide.elementlist.map(element => {
                if(element.idElement === action.payload.idElements){
                  return {
                    ...element,
                    position: action.payload.position
                }
                } else { return element}
              }) 
            } 
          } else { 
              return slide
            }
      });
      case 'ADD_PICTURE':
        console.log('add picture work', action.payload)
        return state.map(slide => {
          if (slide.selected === true)
          { 
            return {
              ...slide,
              elementlist: slide.elementlist.concat([{
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
                  type: 'img',
                  src: action.payload,
                  filter: 'none',
               },
                idElement: setNewId(),
                selected: false,
            }])
            } 
          } else { 
              return slide
            }
      });
      case 'ADD_ROUND':
        console.log('add round work')
        return state.map(slide => {
          if (slide.selected === true)
          { 
            return {
              ...slide,
              elementlist: slide.elementlist.concat([{
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
                    x: 100,
                    y: 100,
                },
                elementConcept: round,
                idElement: setNewId(),
                selected: false,
            }])
            } 
          } else { 
              return slide
            }
      });
    case 'ADD_TEXT':
        console.log('add element work')
        return state.map(slide => {
          if (slide.selected === true)
          { 
            return {
              ...slide,
              elementlist: slide.elementlist.concat([{
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
            }])
            } 
          } else { 
              return slide
            }
      });
    case 'DELETE_ELEMENT':
      console.log('delete element work')
      return state.map(slide => {
        if (slide.idSlide === action.payload.idSlides)
        { 
          return {
            ...slide,
            elementlist: slide.elementlist.filter(element => element.idElement !== action.payload.idElements)
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