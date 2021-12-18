import { ElementConcept, Filter, BorderStyle, ElementType, Background, Color, Slide, SelectionType, Presentation, Editer, Effect, FigureConcept, Mode, PresentationMaker } from '../types';

//FUNCTIONS

function setNewId(): number{
    const max: number = 300;
    const min: number = 10;
    const randomNum: number = Math.floor(Math.random() * (max - min)) + min;
    const newId: number = (new Date()).getTime() % 10 ** 8 + randomNum; 
    return  newId
};

//PresentationMaker

function changeMode(presentationMaker: PresentationMaker, newMode: Mode): PresentationMaker {
    return {
        ...presentationMaker,
        mode: newMode
    };
};

function setSlideSelection(presentationMaker: Editer, newIdSlides: number[]): Editer { 
    return {
        ...presentationMaker,
        selection: {
            ...presentationMaker.selection,
            idSlides: newIdSlides,
        },
    };
};

function setElementSelection(presentationMaker: Editer, newIdElements: number[]): Editer { 
    return {
        ...presentationMaker,
        selection: {
            ...presentationMaker.selection,
            idElements: newIdElements,
        },
    };
};

//Presentation

function createPresentation(presentationMaker: Editer): Editer {
    let newPresentation: Presentation = {
        slidelist: [],
        name: "Without name",
    };
    let newSelection: SelectionType =  {
        idSlides: [],
        idElements: [],
    };

    return {
        ...presentationMaker,
        presentation: newPresentation,
        selection: newSelection,
    };
};

function savePresentation(presentation: Presentation): string {
    const jsonString = JSON.stringify(presentation)
    return jsonString
};

/*
*@param {Presentation } presentation
*@return {FilePDF }  
*/
function exportPresentation(presentation: Presentation) {};

function openPresentation(jsonString: string): Presentation {
    const presentation = JSON.parse(jsonString)
    return presentation
};

function editPresentationName(presentationMaker: Editer, newName: string): Editer {
    return {
        ...presentationMaker,
        presentation: {        
            ...presentationMaker.presentation,
            name: newName,
        },
    };
};

//Slide//

function moveSlide(presentationMaker: Editer, newSlidePosition: number): Editer {
    const selection: SelectionType = presentationMaker.selection; 
    const presentation = presentationMaker.presentation
    let slidelist = presentation.slidelist;
    let i: number;
    
    for(i = 0; i < slidelist.length; i++)
    {
        if(selection.idSlides.indexOf(slidelist[i].idSlide) != -1)
        {
            break;
        };
    };

    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: [slidelist[i], slidelist[newSlidePosition]] = [slidelist[newSlidePosition], slidelist[i]]
        },
    }
};

function addSlide(presentationMaker: Editer): Editer {
    let newSlide: Slide = {
        elementlist: [],
        idSlide: setNewId(),
        background: '#ffffff',
        effects: 'occurrence',
    };

    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: [ 
                ...presentationMaker.presentation.slidelist,
                newSlide 
            ]
        },
    };
};

function deleteSelectedSlide(presentationMaker: Editer): Editer {
    const selection: SelectionType = presentationMaker.selection; 

    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.filter(slide => !(selection.idSlides.includes(slide.idSlide)))
        },
    };
};

function editSlideBackground(presentationMaker: Editer, newBackground: Background): Editer {
    const selection: SelectionType = presentationMaker.selection;
    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
                if (selection.idSlides.indexOf(slide.idSlide) != -1)
                {
                    return {
                        ...slide,
                        background: newBackground 
                    }
                }
                return slide
            })
        },
    };
};

function editSlideEffect(presentationMaker: Editer, newEffect: Effect): Editer {
    const selection: SelectionType = presentationMaker.selection;
    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
                if (selection.idSlides.indexOf(slide.idSlide) != -1)
                {
                    return {
                        ...slide,
                        effects: newEffect,
                    }
                }
                return slide
            })
        },
    };
};    
//Slide//

//Element//                                              

function addElement(presentationMaker: Editer, newElementConcept: ElementConcept): ElementType {
    let newElement: ElementType = {
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
        elementConcept: newElementConcept,
        idElement: setNewId(),
    };

    return newElement; 
}; 

function deleteSelectedElement(presentationMaker: Editer): Editer {
    const selection: SelectionType = presentationMaker.selection;

    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
                if (selection.idSlides.indexOf(slide.idSlide) != -1)
                {
                    return {
                        ...slide,
                        elementlist: slide.elementlist.filter(element => !(selection.idElements.includes(element.idElement)))
                    }
                }
                return slide
            })
        },
    };
};

function editBorderColor(presentationMaker: Editer, newColor: Color): Editer {
    const selection: SelectionType = presentationMaker.selection;

    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
                if (selection.idSlides.indexOf(slide.idSlide) != -1)
                {
                    return {
                        ...slide,
                        elementlist: slide.elementlist.map(element => {
                            if (selection.idElements.indexOf(element.idElement) != -1)
                            {
                                return{
                                    ...element,
                                    border: {
                                        ...element.border,
                                        color: newColor,
                                    } 
                                }
                            }
                            return element
                        })  
                    }
                }
                return slide
            })
        },
    };
}

function editBorderWidth(presentationMaker: Editer, newWidth: number): Editer {
    const selection: SelectionType = presentationMaker.selection;

    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
                if (selection.idSlides.indexOf(slide.idSlide) != -1)
                {
                    return {
                        ...slide,
                        elementlist: slide.elementlist.map(element => {
                            if (selection.idElements.indexOf(element.idElement) != -1)
                            {
                                return{
                                    ...element,
                                    border: {
                                        ...element.border,
                                        width: newWidth,
                                    } 
                                }
                            }
                            return element
                        })  
                    }
                }
                return slide
            })
        },
    };
};

function editBorderStyle(presentationMaker: Editer, newBorderStyle: BorderStyle): Editer {
    
    const selection: SelectionType = presentationMaker.selection;

    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
                if (selection.idSlides.indexOf(slide.idSlide) != -1)
                {
                    return {
                        ...slide,
                        elementlist: slide.elementlist.map(element => {
                            if (selection.idElements.indexOf(element.idElement) != -1)
                            {
                                return{
                                    ...element,
                                    border: {
                                        ...element.border,
                                        borderStyle: newBorderStyle,
                                    } 
                                }
                            }
                            return element
                        })  
                    }
                }
                return slide
            })
        },
    };
};


function moveElement(presentationMaker: Editer, x: number, y: number): Editer {
    const selection: SelectionType = presentationMaker.selection;

    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
                if (selection.idSlides.indexOf(slide.idSlide) != -1)
                {
                    return {
                        ...slide,
                        elementlist: slide.elementlist.map(element => {
                            if (selection.idElements.indexOf(element.idElement) != -1)
                            {
                                return{
                                    ...element,
                                    position: {
                                        x,
                                        y,
                                    } 
                                }
                            }
                            return element
                        })  
                    }
                }
                return slide
            })
        },
    };
};

function editElementSize(presentationMaker: Editer, h: number, w: number): Editer {
    const selection: SelectionType = presentationMaker.selection;

    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
                if (selection.idSlides.indexOf(slide.idSlide) != -1)
                {
                    return {
                        ...slide,
                        elementlist: slide.elementlist.map(element => {
                            if (selection.idElements.indexOf(element.idElement) != -1)
                            {
                                return{
                                    ...element,
                                    size: {
                                        h,
                                        w,
                                    } 
                                }
                            }
                            return element
                        })  
                    }
                }
                return slide
            })
        },
    };
};

//Element

function addImg(presentationMaker: Editer, newSrc: string): Editer { 
    let i: number;
    let newElementlist: ElementType[];
    const selection: SelectionType = presentationMaker.selection;
    let newElement: ElementType;
    let elementConcept: ElementConcept = {
        type: 'img',
        src: newSrc,
        filter: 'none',
    };
    newElement = addElement(presentationMaker, elementConcept);

    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
                if (selection.idSlides.indexOf(slide.idSlide) != -1)
                {
                    return {
                        ...slide,
                        elementlist: 
                        [
                            ...slide.elementlist,
                            newElement 
                        ]
                    }
                }
                return slide
            })
        },
    };
};


function addText(presentationMaker: Editer, newTextContent: string): Editer {
    let i: number;
    let newElementlist: ElementType[];
    const selection: SelectionType = presentationMaker.selection;
    let newElement: ElementType;
    let elementConcept: ElementConcept = {
        type: 'text',
        color: '#000000',
        textContent:  newTextContent,
        links: '',
        size: 12,
        font: 'TimesNewRoman',
        italic: false,
        bold: false,
        underline: false,
    };
    newElement = addElement(presentationMaker, elementConcept);

    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
                if (selection.idSlides.indexOf(slide.idSlide) != -1)
                {
                    return {
                        ...slide,
                        elementlist: 
                        [
                            ...slide.elementlist,
                            newElement
                        ]
                    }
                }
                return slide
            })
        },
    };
};

function addFigure(presentationMaker: Editer, newFigureConcept: FigureConcept): Editer {
    let i: number;
    let newElementlist: ElementType[];
    const selection: SelectionType = presentationMaker.selection;
    let newElement: ElementType;
    let elementConcept: ElementConcept = {
        type: 'figure',
        linecolor: '#000000',
        fillcolor: '#ffffff',
        figureConcept: newFigureConcept,
    };
    newElement = addElement(presentationMaker, elementConcept);

    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
                if (selection.idSlides.indexOf(slide.idSlide) != -1)
                {
                    return {
                        ...slide,
                        elementlist: 
                        [
                            ...slide.elementlist,
                            newElement
                        ]
                    }
                }
                return slide
            })
        },
    };
};

//Text//

function editTextColor(presentationMaker: Editer, newColor: Color): Editer {
    const selection: SelectionType = presentationMaker.selection;
    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
                if (selection.idSlides.indexOf(slide.idSlide) != -1)
                {
                    return {
                        ...slide,
                        elementlist: slide.elementlist.map(element => {
                            if ((selection.idElements.indexOf(element.idElement) != -1) && (element.elementConcept.type == 'text'))
                            {
                                return{
                                    ...element,
                                    elementConcept: {
                                        ...element.elementConcept,
                                        color: newColor,
                                    } 
                                }
                            }
                            return element
                        })  
                    }
                }
                return slide
            })
        },
    };
};

function editTextSize(presentationMaker: Editer, newSize: number): Editer {
    const selection: SelectionType = presentationMaker.selection;
    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
                if (selection.idSlides.indexOf(slide.idSlide) != -1)
                {
                    return {
                        ...slide,
                        elementlist: slide.elementlist.map(element => {
                            if ((selection.idElements.indexOf(element.idElement) != -1) && (element.elementConcept.type == 'text'))
                            {
                                return{
                                    ...element,
                                    elementConcept: {
                                        ...element.elementConcept,
                                        size: newSize,
                                    } 
                                }
                            }
                            return element
                        })  
                    }
                }
                return slide
            })
        },
    };
};


function editFont(presentationMaker: Editer, newFont: string): Editer {
    const selection: SelectionType = presentationMaker.selection;
    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
                if (selection.idSlides.indexOf(slide.idSlide) != -1)
                {
                    return {
                        ...slide,
                        elementlist: slide.elementlist.map(element => {
                            if ((selection.idElements.indexOf(element.idElement) != -1) && (element.elementConcept.type == 'text'))
                            {
                                return{
                                    ...element,
                                    elementConcept: {
                                        ...element.elementConcept,
                                        font: newFont,
                                    } 
                                }
                            }
                            return element
                        })  
                    }
                }
                return slide
            })
        },
    };
};

function addLink(presentationMaker: Editer, newLink: string): Editer {
    const selection: SelectionType = presentationMaker.selection;
    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
                if (selection.idSlides.indexOf(slide.idSlide) != -1)
                {
                    return {
                        ...slide,
                        elementlist: slide.elementlist.map(element => {
                            if ((selection.idElements.indexOf(element.idElement) != -1) && (element.elementConcept.type == 'text'))
                            {
                                return{
                                    ...element,
                                    elementConcept: {
                                        ...element.elementConcept,
                                        links: newLink,
                                    } 
                                }
                            }
                            return element
                        })  
                    }
                }
                return slide
            })
        },
    };
};

function setItalicText(presentationMaker: Editer): Editer {
    const selection: SelectionType = presentationMaker.selection
    return {
        ...presentationMaker,
        presentation:  {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
                if (selection.idSlides.indexOf(slide.idSlide) != -1)
                {
                    return {
                        ...slide,
                        elementlist: slide.elementlist.map(element => {
                            if (selection.idElements.indexOf(element.idElement) != -1)
                            {
                                if (element.elementConcept.type == 'text' && element.elementConcept.italic == true){
                                    return{
                                        ...element,
                                        elementConcept: {
                                            ...element.elementConcept,
                                            italic : false
                                        } 
                                    }
                                }
                                else{
                                    return{
                                        ...element,
                                        elementConcept: {
                                            ...element.elementConcept,
                                            italic : true
                                        } 
                                    }
                                }
                            }
                            return element
                        })  
                    }
                }
                return slide
            })
        },
    };
};

function setBoldText(presentationMaker: Editer): Editer {
    const selection: SelectionType = presentationMaker.selection
    return {
        ...presentationMaker,
        presentation:  {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
                if (selection.idSlides.indexOf(slide.idSlide) != -1)
                {
                    return {
                        ...slide,
                        elementlist: slide.elementlist.map(element => {
                            if (selection.idElements.indexOf(element.idElement) != -1)
                            {
                                if (element.elementConcept.type == 'text' && element.elementConcept.italic == true){
                                    return{
                                        ...element,
                                        elementConcept: {
                                            ...element.elementConcept,
                                            bold : false
                                        } 
                                    }
                                }
                                else{
                                    return{
                                        ...element,
                                        elementConcept: {
                                            ...element.elementConcept,
                                            bold : true
                                        } 
                                    }
                                }
                            }
                            return element
                        })  
                    }
                }
                return slide
            })
        },
    };
};

function setUnderlineText(presentationMaker: Editer): Editer {
    const selection: SelectionType = presentationMaker.selection
    return {
        ...presentationMaker,
        presentation:  {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
                if (selection.idSlides.indexOf(slide.idSlide) != -1)
                {
                    return {
                        ...slide,
                        elementlist: slide.elementlist.map(element => {
                            if (selection.idElements.indexOf(element.idElement) != -1)
                            {
                                if (element.elementConcept.type == 'text' && element.elementConcept.italic == true){
                                    return{
                                        ...element,
                                        elementConcept: {
                                            ...element.elementConcept,
                                            underline : false
                                        } 
                                    }
                                }
                                else{
                                    return{
                                        ...element,
                                        elementConcept: {
                                            ...element.elementConcept,
                                            underline : true
                                        } 
                                    }
                                }
                            }
                            return element
                        })  
                    }
                }
                return slide
            })
        },
    };
};

//Figure

function editFigureLineColor(presentationMaker: Editer, color: Color): Editer {
    const selection: SelectionType = presentationMaker.selection;
    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
                if (selection.idSlides.indexOf(slide.idSlide) != -1)
                {
                    return {
                        ...slide,
                        elementlist: slide.elementlist.map(element => {
                            if ((selection.idElements.indexOf(element.idElement) != -1) && (element.elementConcept.type == 'text'))
                            {
                                return{
                                    ...element,
                                    elementConcept: {
                                        ...element.elementConcept,
                                        linecolor: color,
                                    } 
                                }
                            }
                            return element
                        })  
                    }
                }
                return slide
            })
        },
    };
};

function editFigureFillColor(presentationMaker: Editer, color: Color): Editer {
    const selection: SelectionType = presentationMaker.selection;
    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
                if (selection.idSlides.indexOf(slide.idSlide) != -1)
                {
                    return {
                        ...slide,
                        elementlist: slide.elementlist.map(element => {
                            if ((selection.idElements.indexOf(element.idElement) != -1) && (element.elementConcept.type == 'text'))
                            {
                                return{
                                    ...element,
                                    elementConcept: {
                                        ...element.elementConcept,
                                        fillcolor: color,
                                    } 
                                }
                            }
                            return element
                        })  
                    }
                }
                return slide
            })
        },
    };
};

//IMG
function editFilter(presentationMaker: Editer, newFilter: Filter): Editer {
    const selection: SelectionType = presentationMaker.selection;
    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
                if (selection.idSlides.indexOf(slide.idSlide) != -1)
                {
                    return {
                        ...slide,
                        elementlist: slide.elementlist.map(element => {
                            if ((selection.idElements.indexOf(element.idElement) != -1) && (element.elementConcept.type == 'text'))
                            {
                                return{
                                    ...element,
                                    elementConcept: {
                                        ...element.elementConcept,
                                        filter: newFilter,
                                    } 
                                }
                            }
                            return element
                        })  
                    }
                }
                return slide
            })
        },
    };
};