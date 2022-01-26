
import { Reducer } from "react"
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
      return state.concat([{ 
        elementlist: [],
        idSlide: setNewId(),
        background: {
          type: 'color',
          color: '#FFFFFF'
        },
        effects: 'none',
        selected: false,
      }]);
    case 'DELETE_SLIDE':
      return state.filter(slide => slide.selected !== true);
    case 'GOTO_SLIDE':
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
      case 'GOTO_SLIDES':
          return state.map(slide => {
            if (slide.idSlide === action.payload)
            { 
              return {
                ...slide,
                selected: true
              } 
            } else { 
                return slide}
        });
    case 'ADD_SLIDE_EFFECT':
        return state.map(slide => {
          return{
            ...slide,
            effects: action.payload
          }
      });
    case 'MOVE_SLIDE': 
      let end = state.indexOf(action.payload.end);
      let start = state.indexOf(action.payload.start);

      let newSlidelist: Slide[] = [];
      for(let i = 0; i < state.length; i++){
        if(i == end){
          newSlidelist.push(state[start]);  
        } else {
          if(i == start){
            newSlidelist.push(state[end]);
          } else {
            newSlidelist.push(state[i]);
          };
        }
      }
      return newSlidelist;
    case 'EDIT_SLIDE_BACKGROUND_COLOR':
        return state.map(slide => {
          if (action.payload.idSlides.includes(slide.idSlide))
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
          return state.map(slide => {
            if (action.payload.idSlides.includes(slide.idSlide))
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
        return state.map(slide => {
          if (action.payload.selection.idSlides.includes(slide.idSlide))
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
        return state.map(slide => {
          if (action.payload.selection.idSlides.includes(slide.idSlide))
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
      case 'CHANGE_ELEMENT_BORDER':
        return state.map(slide => {
          if (action.payload.selection.idSlides.includes(slide.idSlide))
          { 
            return {
              ...slide,
              elementlist: slide.elementlist.map(element => {
                if(element.idElement === action.payload.selection.idElements){
                  return {
                    ...element,
                    border: {
                      ...element.border,
                      borderStyle: action.payload.style,
                    }
                }
                } else { return element}
              }) 
            } 
          } else { 
              return slide
            }
      });
      case 'CHANGE_BORDER_WIDTH':
        return state.map(slide => {
          if (action.payload.selection.idSlides.includes(slide.idSlide))
          { 
            return {
              ...slide,
              elementlist: slide.elementlist.map(element => {
                if(element.idElement === action.payload.selection.idElements){
                  return {
                    ...element,
                    border: {
                      ...element.border,
                      width: action.payload.size, 
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
        return state.map(slide => {
          if (action.payload.selection.idSlides.includes(slide.idSlide))
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
      case 'SET_IMAGE_FILTER':
        return state.map(slide => {
          if (action.payload.selection.idSlides.includes(slide.idSlide))
          { 
            return {
              ...slide,
              elementlist: slide.elementlist.map(element => {
                if(element.idElement === action.payload.selection.idElements){
                  return {
                    ...element,
                    elementConcept: {
                        ...element.elementConcept,
                        filter: action.payload.filter,
                    } 
                }
                } else { return element}
              }) 
            } 
          } else { 
              return slide
            }
      });
      case 'CHANGE_TEXT_SIZE':
        return state.map(slide => {
          if (action.payload.selection.idSlides.includes(slide.idSlide))
          { 
            return {
              ...slide,
              elementlist: slide.elementlist.map(element => {
                if(element.idElement === action.payload.selection.idElements){
                  return {
                    ...element,
                    elementConcept: {
                        ...element.elementConcept,
                        size: action.payload.size,
                    } 
                }
                } else { return element}
              }) 
            } 
          } else { 
              return slide
            }
      });
      case 'CHANGE_TEXT_FONT':
        return state.map(slide => {
          if (action.payload.selection.idSlides.includes(slide.idSlide))
          { 
            return {
              ...slide,
              elementlist: slide.elementlist.map(element => {
                if(element.idElement === action.payload.selection.idElements){
                  return {
                    ...element,
                    elementConcept: {
                        ...element.elementConcept,
                        font: action.payload.font,
                    } 
                }
                } else { return element}
              }) 
            } 
          } else { 
              return slide
            }
      });
      //
      case 'SET_TEXT_BOLD':
        return state.map(slide => {
          if (action.payload.idSlides.includes(slide.idSlide))
          { 
            return {
              ...slide,
              elementlist: slide.elementlist.map(element => {
                if(element.idElement === action.payload.idElements && element.elementConcept.type === 'text'){
                  return {
                    ...element,
                    elementConcept: {
                        ...element.elementConcept,
                        bold: !element.elementConcept.bold,
                    } 
                }
                } else { return element}
              }) 
            } 
          } else { 
              return slide
            }
      });
      case 'SET_TEXT_ITALIC':
        return state.map(slide => {
          if (action.payload.idSlides.includes(slide.idSlide))
          { 
            return {
              ...slide,
              elementlist: slide.elementlist.map(element => {
                if(element.idElement === action.payload.idElements && element.elementConcept.type === 'text'){
                  return {
                    ...element,
                    elementConcept: {
                        ...element.elementConcept,
                        italic: !element.elementConcept.italic,
                    } 
                }
                } else { return element}
              }) 
            } 
          } else { 
              return slide
            }
      });
      case 'SET_TEXT_UNDERLINE':
        return state.map(slide => {
          if (action.payload.idSlides.includes(slide.idSlide))
          { 
            return {
              ...slide,
              elementlist: slide.elementlist.map(element => {
                if(element.idElement === action.payload.idElements && element.elementConcept.type === 'text'){
                  return {
                    ...element,
                    elementConcept: {
                        ...element.elementConcept,
                        underline: !element.elementConcept.underline,
                    } 
                }
                } else { return element}
              }) 
            } 
          } else { 
              return slide
            }
      });
      //
      case 'CHANGE_TEXT_COLOR':
        return state.map(slide => {
          if (action.payload.selection.idSlides.includes(slide.idSlide))
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
        return state.map(slide => {
          if (action.payload.selection.idSlides.includes(slide.idSlide))
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
        return state.map(slide => {
          if (action.payload.selection.idSlides.includes(slide.idSlide))
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
        return state.map(slide => {
          if (action.payload.selection.idSlides.includes(slide.idSlide))
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

      case 'MOVE_ELEMENT':
        return state.map(slide => {
          if (action.payload.selection.idSlides.includes(slide.idSlide))
          { 
            return {
              ...slide,
              elementlist: slide.elementlist.map(element => {
                if (element.selected === true){
                  return {
                    ...element,
                    position: {
                      x: element.position.x + action.payload.position.x,
                      y: element.position.y + action.payload.position.y,
                    }
                }
                } else { return element}
              }) 
            } 
          } else { 
              return slide
            }
      });

      case 'RESIZE_ELEMENT':
        return state.map(slide => {
          if (action.payload.selection.idSlides.includes(slide.idSlide))
          { 
            return {
              ...slide,
              elementlist: slide.elementlist.map(element => {
                if (element.selected === true) {
                  return {
                    ...element,
                   size: {
                     h: element.size.h + action.payload.size.y,
                     w: element.size.w + action.payload.size.x,
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
        return state.map(slide => {
          if (action.payload.selection.idSlides.includes(slide.idSlide))
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
        return state.map(slide => {
          if (action.payload.selection.idSlides.includes(slide.idSlide))
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
      return state.map(slide => {
        if (action.payload.idSlides.includes(slide.idSlide))
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