import { PresentationMaker } from "./types";
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
import { Triangel } from "./types";
import { Round } from "./types";
import { Rectangel } from "./types";
import { ElementConcept } from "./types";


//FUNCTIONS

function createPresentation(presentationMaker: PresentationMaker) {
    return presentationMaker.presentation;
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

function editPresentationName(presentation: Presentation, name: string): Presentation {
    presentation.name = name;
    return {
        ...presentation,
    };
};

function moveSlide(presentation: Presentation, newSlidePosition: number): Presentation {
    const selection: SelectionType = presentation.selection;
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
            if (slide.idSlide == selection.idSlide)
            {
                slide.slidePosition = newSlidePosition; //уточнить
                return {
                    ...slide,
                };
            }
            return slide
        })
    }
};

function addSlide(presentation: Presentation): Presentation  {
    let newSlide:Slide = {
        elementlist: [],
        slidePosition: presentation.slidelist.length + 1,
        idSlide: Math.floor((Math.random() * 100) + 1),
        background: 'ffffff',
        effects: 'occurrence',
    };
    presentation.slidelist.push(newSlide);
    return {
        ...presentation,
    };
};

function deleteSlide(presentation: Presentation)  {
    return presentation;
};

function editSlideBackground(presentation: Presentation, background: Background) {
    return presentation;
};

function editSlideEffect(presentation: Presentation, effect: string) {
    return presentation;
};

//не готова
function addElement(presentation: Presentation, newElement: string): Presentation {
    const selection: SelectionType = presentation.selection;
    let newElementConcept: ElementConcept;
    let newElement: ElementType{
        size: ;
        border: Border;
        position: Position;
        elementConcept: newElementConcept,
        idElement: Math.floor((Math.random() * 100) + 1),
    }
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
            if (slide.idSlide == selection.idSlide)
            {
                slide.elementlist.push(newElement);
                return {
                    ...slide,
                };
            }
            return slide
        })
    }
};

function deleteElement(presentation: Presentation) {
    return presentation;
};

function addImg(element: ElementType, newSrc: string) {
    let newImg:Img = {
        src: newSrc,
        filter: 'none',
    };
    element: newImg;
    return element
};


function addText(presentation: Presentation, textContent: string) {
    return presentation;
};

function addFigure(presentation: Presentation) {
    return presentation;
};

function editBorderColor(presentation: Presentation, color: number): Presentation {
    const selection: SelectionType = presentation.selection
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
            if (slide.idSlide == selection.idSlide)
            {
                return {
                    ...slide,
                    elementlist: slide.elementlist.map(element => {
                        if (element.idElement == selection.idElement)
                        {
                            return{
                                ...element,
                                border: {
                                    ...element.border,
                                    Color: color
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

function editBorderWidth(presentation: Presentation, width: number): Presentation {
    const selection: SelectionType = presentation.selection
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
            if (slide.idSlide == selection.idSlide)
            {
                return {
                    ...slide,
                    elementlist: slide.elementlist.map(element => {
                        if (element.idElement == selection.idElement)
                        {
                            return{
                                ...element,
                                border: {
                                    ...element.border,
                                    number: width
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
            if (slide.idSlide == selection.idSlide)
            {
                return {
                    ...slide,
                    elementlist: slide.elementlist.map(element => {
                        if (element.idElement == selection.idElement)
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
            if (slide.idSlide == selection.idSlide)
            {
                return {
                    ...slide,
                    elementlist: slide.elementlist.map(element => {
                        if (element.idElement == selection.idElement)
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

function editElementSize(presentation: Presentation, newSize: number): Presentation {
    const selection: SelectionType = presentation.selection
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
            if (slide.idSlide == selection.idSlide)
            {
                return {
                    ...slide,
                    elementlist: slide.elementlist.map(element => {
                        if (element.idElement == selection.idElement)
                        {
                            return{
                                ...element,
                                size: newSize
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

function editFilter(presentation: Presentation, newFilter: Filter): Presentation {
    const selection: SelectionType = presentation.selection
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
            if (slide.idSlide == selection.idSlide)
            {
                return {
                    ...slide,
                    elementlist: slide.elementlist.map(element => {
                        if (element.idElement == selection.idElement)
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

function editTextColor(presentation: Presentation, color: number) {
    return presentation;
};

function editFont(presentation: Presentation, font: string[]) {
    return presentation;
};

function addLink(presentation: Presentation, newLink: boolean): Presentation {
    const selection: SelectionType = presentation.selection
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
            if (slide.idSlide == selection.idSlide)
            {
                return {
                    ...slide,
                    elementlist: slide.elementlist.map(element => {
                        if (element.idElement == selection.idElement)
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

function editFigureLineColor(presentation: Presentation, color: Color): Presentation {
    const selection: SelectionType = presentation.selection
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
            if (slide.idSlide == selection.idSlide)
            {
                return {
                    ...slide,
                    elementlist: slide.elementlist.map(element => {
                        if (element.idElement == selection.idElement)
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
            if (slide.idSlide == selection.idSlide)
            {
                return {
                    ...slide,
                    elementlist: slide.elementlist.map(element => {
                        if (element.idElement == selection.idElement)
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

function makeRound(presentation: Presentation) {
    let figure: Figure;
    figure.figureType = 'round';
    return figure;
};

function makeTriangel(presentation: Presentation) {
    let figure: Figure;
    figure.figureType = 'triangel';
    return figure;
};

function makeRectangle(presentation: Presentation) {
    let figure: Figure;
    figure.figureType = 'rectangle';
    return figure;
};

function setItalicText(presentation: Presentation): Presentation {
    const selection: SelectionType = presentation.selection
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
            if (slide.idSlide == selection.idSlide)
            {
                return {
                    ...slide,
                    elementlist: slide.elementlist.map(element => {
                        if (element.idElement == selection.idElement)
                        {
                            if (element.elementConcept.italic == true){
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
            if (slide.idSlide == selection.idSlide)
            {
                return {
                    ...slide,
                    elementlist: slide.elementlist.map(element => {
                        if (element.idElement == selection.idElement)
                        {
                            if (element.elementConcept.bold == true){
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
            if (slide.idSlide == selection.idSlide)
            {
                return {
                    ...slide,
                    elementlist: slide.elementlist.map(element => {
                        if (element.idElement == selection.idElement)
                        {
                            if (element.elementConcept.underline == true){
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
