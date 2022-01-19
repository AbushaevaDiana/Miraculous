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
        effects: 'none',
        selected: false,
      }]);
    case 'DELETE_SLIDE':
      console.log('delete work')
      return state.filter(slide => slide.selected !== true);
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
      case 'GOTO_SLIDES':
        console.log('goto slides work')
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
      console.log('effect change work')
        return state.map(slide => {
          return{
            ...slide,
            effects: action.payload
          }
      });
    case 'MOVE_SLIDE': 
      console.log('move slide')
      let end = action.payload.start;
      let start = action.payload.end;
      return state

    //   return state.map(slide => {
    //     if (slide.idSlide == action.payload.start.idSlide)
    //     {return action.payload.end}
    //     else{if (slide.idSlide == action.payload.end.idSlide)
    //     {return action.payload.start}
    //     else {return slide}}
    // });
    case 'EDIT_SLIDE_BACKGROUND_COLOR':
      console.log('back color change work')
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
        console.log('back img work', action.payload.newBackground)
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
        console.log('change text work')
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
        console.log('change line color work')
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
        console.log('change border work')
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
        console.log('зашел в move element!');
        console.log(action.payload);
        return state.map(slide => {
          if (action.payload.selection.idSlides.includes(slide.idSlide))
          { 
            return {
              ...slide,
              elementlist: slide.elementlist.map(element => {
                if (element.selected === true){
                  console.log('зашел в улсовие2')
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
      console.log('delete element work')
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