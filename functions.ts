import { Effect, FigureConcept, Mode, PresentationMaker } from "./types";
import { Presentation } from "./types";
import { SelectionType } from "./types";
import { Slide } from "./types";
import { Color } from "./types";
import { Background } from "./types";
import { ElementType } from "./types";
import { Border } from "./types";
import { BorderStyle } from "./types";
import { Position } from "./types";
import { TextType } from "./types";
import { Img } from "./types";
import { Filter } from "./types";
import { Figure } from "./types";
import { ElementConcept } from "./types";


//FUNCTIONS

function createPresentation(presentationMaker: PresentationMaker): PresentationMaker {
    let newPresentation: {
        history: [],
        slidelist: [],
        name: "Without name";
        selection: {
            idSlides: [],
            idElements: [],
        };
    };
    return {
        ...presentationMaker,
        presentation: newPresentation
    };
};

/*
*@param {Presentation } presentation
*@return {FileJson } 
*/
function savePresentation(presentation: Presentation) {};

/*
*@param {Presentation } presentation
*@return {FilePDF }  
*/
function exportPresentation(presentation) {};

/*
*@param {Presentation } presentationMaker
*@param {FileJson } fileJson 
*@return { Presentation }
*/
function openPresentation(fileJson) {};

/*
*@param {Presentation} presentation
*@return {Presentation}
*/
function undo(presentation){};

/*
*@param {Presentation} presentation
*@return {Presentation}
*/
function redo(presentation){};

function changeMode(presentationMaker: PresentationMaker, newMode: Mode): PresentationMaker {
    return {
        ...presentationMaker,
        mode: newMode
    };
};

function editPresentationName(presentation: Presentation, newName: string): Presentation {
    return {
        ...presentation,
        name: newName
    };
};

                                              //Slide//

function moveSlide(presentation: Presentation, newSlidePosition: number): Presentation {
    const selection: SelectionType = presentation.selection;
    let i: number;
    let iSlide: Slide;

    presentation.slidelist.map(slide => {
        if (selection.idSlides.indexOf(slide.idSlide) != -1)
        {
            i = presentation.slidelist.indexOf(slide)
        };
    });
    if(i < newSlidePosition){
        for(i; i < newSlidePosition; i++){
            iSlide = presentation.slidelist[i];
            presentation.slidelist[i] = presentation.slidelist[i+1];
            presentation.slidelist[i+1] = iSlide;
        };
    };
    if(i > newSlidePosition){
        for(i; i > newSlidePosition; i--){
            iSlide = presentation.slidelist[i];
            presentation.slidelist[i] = presentation.slidelist[i-1];
            presentation.slidelist[i-1] = iSlide;
        };
    };
    return presentation;
};

function addSlide(presentation: Presentation): Presentation  {
    let newSlide:Slide = {
        elementlist: [],
        idSlide: Math.floor((Math.random() * 100) + 1),
        background: '#ffffff',
        effects: 'occurrence',
    };
    presentation.slidelist.push(newSlide);
    return presentation;
};

function deleteSlide(presentation: Presentation): Presentation  {
    const selection: SelectionType = presentation.selection;
    let i: number;
    let iSlide: Slide;
    presentation.slidelist.map(slide => {
        if (selection.idSlides.indexOf(slide.idSlide) != -1)
        {
            i = presentation.slidelist.indexOf(slide)
        };
    });
    for(i; i > presentation.slidelist.length; i--){
        iSlide = presentation.slidelist[i];
        presentation.slidelist[i] = presentation.slidelist[i-1];
        presentation.slidelist[i-1] = iSlide;
    };
    presentation.slidelist.pop();

    return presentation;
};

function editSlideBackground(presentation: Presentation, newBackground: Background): Presentation {
    const selection: SelectionType = presentation.selection
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
            if (selection.idSlides.indexOf(slide.idSlide) != -1)
            {
                return {
                    ...slide,
                    background: newBackground 
                }
            }
            return slide
        })
    };
};

function editSlideEffect(presentation: Presentation, newEffect: Effect): Presentation {
    const selection: SelectionType = presentation.selection
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
            if (selection.idSlides.indexOf(slide.idSlide) != -1)
            {
                return {
                    ...slide,
                    effects: newEffect 
                }
            }
            return slide
        })
    };
};

                                              //Slide//

                                            //Element//                                              

function addElement(presentation: Presentation, newElementConcept: ElementConcept): ElementType {
    const selection: SelectionType = presentation.selection;
    let newElement: {
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
        };
        elementConcept: ElementConcept,
        idElement: number,
    };
    newElement.idElement = Math.floor((Math.random() * 100) + 1);
    newElement.elementConcept = newElementConcept;
    return newElement;
};

function deleteElement(presentation: Presentation): Presentation {
    const selection: SelectionType = presentation.selection;
    let i: number;
    let iElement: ElementType;

    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
            if (selection.idSlides.indexOf(slide.idSlide) != -1)
            {
                slide.elementlist.map(element => {
                    if (selection.idElements.indexOf(element.idElement) != -1)
                    {
                        i = slide.elementlist.indexOf(element)
                    };
                });
                for(i; i > slide.elementlist.length; i--){
                    iElement = slide.elementlist[i];
                    slide.elementlist[i] = slide.elementlist[i-1];
                    slide.elementlist[i-1] = iElement;
                };
                slide.elementlist.pop();
            };
            return slide;
        })
    };
};

function editBorderColor(presentation: Presentation, newColor: Color): Presentation {
    const selection: SelectionType = presentation.selection
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
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
    };
};

function editBorderWidth(presentation: Presentation, newWidth: number): Presentation {
    const selection: SelectionType = presentation.selection
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
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
                                    width: newWidth
                                } 
                            }
                        }
                        return element
                    })  
                }
            }
            return slide
        })
    };
};

function editBorderStyle(presentation: Presentation, newBorderStyle: BorderStyle): Presentation {
    const selection: SelectionType = presentation.selection
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
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
                                    borderStyle: newBorderStyle
                                } 
                            }
                        }
                        return element
                    })  
                }
            }
            return slide
        })
    };
};


function moveElement(presentation: Presentation, x: number, y: number): Presentation {
    const selection: SelectionType = presentation.selection
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
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
    };
};

function editElementSize(presentation: Presentation, h: number, w: number): Presentation {
    const selection: SelectionType = presentation.selection
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
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
    };
};

                                         //Element

function addImg(presentation: Presentation, newSrc: string): Presentation{
    const selection: SelectionType = presentation.selection;
    let newElement: ElementType;
    let elementConcept: {
        type: 'img',
        src: string,
        filter: 'none',
    };
    elementConcept.src = newSrc;
    newElement = addElement(presentation, elementConcept);
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
            if (selection.idSlides.indexOf(slide.idSlide) != -1)
            {
                slide.elementlist.push(newElement);
            };
            return slide;
        })
    };
};


function addText(presentation: Presentation, newTextContent: string): Presentation{
    const selection: SelectionType = presentation.selection;
    let newElement: ElementType;
    let elementConcept: {
        type: 'text',
        color: '#000000',
        textContent: string,
        links: '',
        font: string,
        italic: false,
        bold: false,
        underline: false,
    };
    elementConcept.textContent = newTextContent;
    newElement = addElement(presentation, elementConcept);
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
            if (selection.idSlides.indexOf(slide.idSlide) != -1)
            {
                slide.elementlist.push(newElement);
            };
            return slide;
        })
    };
};

function addFigure(presentation: Presentation, newFigureConcept: FigureConcept): Presentation{
    const selection: SelectionType = presentation.selection;
    let newElement: ElementType;
    let elementConcept: {
        type: 'figure',
        linecolor: '#000000',
        fillcolor: '#ffffff',
        figureConcept: FigureConcept,
    };
    elementConcept.figureConcept = newFigureConcept;
    newElement = addElement(presentation, elementConcept);
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
            if (selection.idSlides.indexOf(slide.idSlide) != -1)
            {
                slide.elementlist.push(newElement);
            };
            return slide;
        })
    };
};

//Text//

function editTextColor(presentation: Presentation, newColor: Color): Presentation {
    const selection: SelectionType = presentation.selection
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
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
    };
};

function editFont(presentation: Presentation, newFont: string): Presentation {
    const selection: SelectionType = presentation.selection
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
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
    };
};

function addLink(presentation: Presentation, newLink: string): Presentation {
    const selection: SelectionType = presentation.selection
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
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
                                    links: newLink
                                } 
                            }
                        }
                        return element
                    })  
                }
            }
            return slide
        })
    };
};

function setItalicText(presentation: Presentation): Presentation {
    const selection: SelectionType = presentation.selection
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
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
    };
};

function setBoldText(presentation: Presentation): Presentation {
    const selection: SelectionType = presentation.selection
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
            if (selection.idSlides.indexOf(slide.idSlide) != -1)
            {
                return {
                    ...slide,
                    elementlist: slide.elementlist.map(element => {
                        if (selection.idElements.indexOf(element.idElement) != -1)
                        {
                            if (element.elementConcept.type == 'text' && element.elementConcept.bold == true){
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
    };
};

function setUnderlineText(presentation: Presentation): Presentation {
    const selection: SelectionType = presentation.selection
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
            if (selection.idSlides.indexOf(slide.idSlide) != -1)
            {
                return {
                    ...slide,
                    elementlist: slide.elementlist.map(element => {
                        if (selection.idElements.indexOf(element.idElement) != -1)
                        {
                            if (element.elementConcept.type == 'text' && element.elementConcept.underline == true){
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
    };
};

//Figure

function editFigureLineColor(presentation: Presentation, color: Color): Presentation {
    const selection: SelectionType = presentation.selection
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
            if (selection.idSlides.indexOf(slide.idSlide) != -1)
            {
                return {
                    ...slide,
                    elementlist: slide.elementlist.map(element => {
                        if ((selection.idElements.indexOf(element.idElement) != -1) && (element.elementConcept.type == 'figure'))
                        {
                            return{
                                ...element,
                                elementConcept: {
                                    ...element.elementConcept,
                                    linecolor: color
                                }
                            }
                        }
                        return element
                    })  
                }
            }
            return slide
        })
    };
};

function editFigureFillColor(presentation: Presentation, color: Color): Presentation {
    const selection: SelectionType = presentation.selection
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
            if (selection.idSlides.indexOf(slide.idSlide) != -1)
            {
                return {
                    ...slide,
                    elementlist: slide.elementlist.map(element => {
                        if ((selection.idElements.indexOf(element.idElement) != -1) && (element.elementConcept.type == 'figure'))
                        {
                            return{
                                ...element,
                                elementConcept: {
                                    ...element.elementConcept,
                                    fillcolor: color
                                }
                            }
                        }
                        return element
                    })  
                }
            }
            return slide
        })
    };
};

//IMG
function editFilter(presentation: Presentation, newFilter: Filter): Presentation {
    const selection: SelectionType = presentation.selection
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
            if (selection.idSlides.indexOf(slide.idSlide) != -1)
            {
                return {
                    ...slide,
                    elementlist: slide.elementlist.map(element => {
                        if ((selection.idElements.indexOf(element.idElement) != -1) && (element.elementConcept.type == 'img'))
                        {
                            return{
                                ...element,
                                elementConcept: {
                                    ...element.elementConcept,
                                    filter: newFilter
                                } 
                            }
                        }
                        return element
                    })  
                }
            }
            return slide
        })
    };
};