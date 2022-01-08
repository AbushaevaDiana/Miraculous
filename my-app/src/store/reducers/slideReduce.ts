import { type } from "os";
import { Reducer } from "react"
import { getPositionOfLineAndCharacter } from "typescript";
import { setNewId } from "../../functions/functions"
import { ActionType, Figure, Slide } from "../../types"

let round: Figure = {
  type: 'figure',
  linecolor: '#000000',
  fillcolor: '#ADFF2F',
  figureConcept: 'Round',
}
let triangel: Figure = {
  type: 'figure',
  linecolor: '#000000',
  fillcolor: '#ADFF2F',
  figureConcept: 'Triangel',
}
let rectangel: Figure = {
  type: 'figure',
  linecolor: '#000000',
  fillcolor: '#ADFF2F',
  figureConcept: 'Rectangel',
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
      case 'CHANGE_LINE_COLOR':
        console.log('change line color work')
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
                        linecolor: action.payload.color,
                    } 
                }
                } else { return element}
              }) 
            } 
          } else { 
              return slide
            }
      });
      case 'CHANGE_BORDER_COLOR':
        console.log('change border color work')
        return state.map(slide => {
          if (slide.idSlide === action.payload.selection.idSlides)
          { 
            return {
              ...slide,
              elementlist: slide.elementlist.map(element => {
                if(element.idElement === action.payload.selection.idElements){
                  return {
                    ...element,
                    border: {
                      ...element.border,
                      color: action.payload.color 
                    }
                }
                } else { return element}
              }) 
            } 
          } else { 
              return slide
            }
      });
      case 'CHANGE_TEXT_COLOR':
        console.log('change text color work')
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
                        color: action.payload.color,
                    } 
                }
                } else { return element}
              }) 
            } 
          } else { 
              return slide
            }
      });
      case 'CHANGE_FILL_COLOR':
        console.log('change fill color work')
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
                        fillcolor: action.payload.color,
                    }
                }
                } else { return element}
              }) 
            } 
          } else { 
              return slide
            }
      });
      case 'MOVE_ELEMENT_X':
        console.log('move x work', action.payload.x)
        return state.map(slide => {
          if (slide.idSlide === action.payload.selection.idSlides)
          { 
            return {
              ...slide,
              elementlist: slide.elementlist.map(element => {
                if(element.idElement === action.payload.selection.idElements){
                  return {
                    ...element,
                    position: {
                      ...element.position,
                      x: action.payload.x,
                    }
                }
                } else { return element}
              }) 
            } 
          } else { 
              return slide
            }
      });
      case 'MOVE_ELEMENT_Y':
        console.log('move y work', action.payload.y)
        return state.map(slide => {
          if (slide.idSlide === action.payload.selection.idSlides)
          { 
            return {
              ...slide,
              elementlist: slide.elementlist.map(element => {
                if(element.idElement === action.payload.selection.idElements){
                  return {
                    ...element,
                    position: {
                      ...element.position,
                      y: action.payload.y,
                    }
                }
                } else { return element}
              }) 
            } 
          } else { 
              return slide
            }
      });
      case 'CHANGE_ELEMENT_HEIGTH':
        console.log('resize h work', action.payload.h)
        return state.map(slide => {
          if (slide.idSlide === action.payload.selection.idSlides)
          { 
            return {
              ...slide,
              elementlist: slide.elementlist.map(element => {
                if(element.idElement === action.payload.selection.idElements){
                  return {
                    ...element,
                    size: {
                      ...element.size,
                      h: action.payload.h,
                    }
                }
                } else { return element}
              }) 
            } 
          } else { 
              return slide
            }
      });
      case 'CHANGE_ELEMENT_WEIGTH':
        console.log('resize w work', action.payload.w)
        return state.map(slide => {
          if (slide.idSlide === action.payload.selection.idSlides)
          { 
            return {
              ...slide,
              elementlist: slide.elementlist.map(element => {
                if(element.idElement === action.payload.selection.idElements){
                  return {
                    ...element,
                    size: {
                      ...element.size,
                      w: action.payload.w,
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
                    color: '#000000',
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
                    color: '#000000',
                    borderStyle: 'none',
                    width: 5,
                },
                position: {
                    x: 0,
                    y: 0,
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
      case 'ADD_RECTANGLE':
        console.log('add RECTANGLE work')
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
                    color: '#000000',
                    borderStyle: 'none',
                    width: 5,
                },
                position: {
                    x: 0,
                    y: 0,
                },
                elementConcept: rectangel,
                idElement: setNewId(),
                selected: false,
            }])
            } 
          } else { 
              return slide
            }
      });
      case 'ADD_TRIANGLE':
        console.log('add triangel work')
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
                    color: '#000000',
                    borderStyle: 'none',
                    width: 5,
                },
                position: {
                    x: 0,
                    y: 0,
                },
                elementConcept: triangel,
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
                    h: 50,
                    w: 100,
                },
                border: {
                    color: '#000000',
                    borderStyle: 'none',
                    width: 5,
                },
                position: {
                    x: 0,
                    y: 0,
                },
                elementConcept: {
                    type: 'text',
                    color: '#000000',
                    textContent: 'Текст',
                    links: '',
                    size: 20,
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