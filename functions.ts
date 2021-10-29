import { Effect, FigureConcept, History, Mode, PresentationMaker } from "./types";
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
//передавать общий тип presentation и selection
function createPresentation(presentationMaker: PresentationMaker): PresentationMaker {
    let newPresentation: Presentation = {
        slidelist: [],
        name: "Without name",
    };
    let newSelection: SelectionType =  {
        idSlides: [],
        idElements: [],
    };
    let newHistory: History = {
        actionlist: [],
        currentIndex: -1,
    };
    return {
        ...presentationMaker,
        presentation: newPresentation,
        selection: newSelection,
        history: newHistory,
    };
};

function setNewId(): number{
    const max: number = 300;
    const min: number = 10;
    const randomNum: number = Math.floor(Math.random() * (max - min)) + min;
    const newId: number = (new Date()).getTime() % 10 ** 8 + randomNum; 
    return  newId
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

function addActionToHistory(presentationMaker: PresentationMaker): History {
    let newAction: Presentation = presentationMaker.presentation;
    let newHistory: History = presentationMaker.history;
    let newActionlist: Presentation[]; 
    let newCurrentIndex: number = presentationMaker.history.currentIndex;
    let a: number;

    for(a = 0; a <= newCurrentIndex; a++){
        newActionlist.push(presentationMaker.history.actionlist[a]);
    };


    newActionlist.push(newAction);
    newCurrentIndex = newCurrentIndex + 1;
 
    return { 
        ...newHistory,
        actionlist: newActionlist,
        currentIndex: newCurrentIndex,
    };
};

function undo(presentationMaker: PresentationMaker): PresentationMaker {
    let newHistory: History = presentationMaker.history;
    let i: number = newHistory.currentIndex;
    let newPresentation: Presentation;
    if(i >= 0){
        if (i == (newHistory.actionlist.length - 1)){
            newHistory = addActionToHistory(presentationMaker)
        };
        newPresentation = newHistory.actionlist[i];
    
        i = i - 1;
        newHistory.currentIndex = i;
    };
    return {
       ...presentationMaker,
       presentation: newPresentation,
       history: newHistory,
    };
};


function redo(presentationMaker: PresentationMaker): PresentationMaker{
    const actionlist: Presentation[] = presentationMaker.history.actionlist;
    let i: number = presentationMaker.history.currentIndex;
    let newPresentation: Presentation;
    if (i < (actionlist.length - 2)) {
        i = i + 2;
        newPresentation = actionlist[i];
        i = i - 1;
    };
    
    return {
       ...presentationMaker,
       presentation: newPresentation,
       history: {
           ...presentationMaker.history,
           currentIndex: i,
       },
    };
};

function changeMode(presentationMaker: PresentationMaker, newMode: Mode): PresentationMaker {
    return {
        ...presentationMaker,
        mode: newMode
    };
};

;

function editPresentationName(presentationMaker: PresentationMaker, newName: string): PresentationMaker {
    // let newHistory: History = addActionToHistory(presentationMaker);

    return {
        ...presentationMaker,
        presentation: {        
            ...presentationMaker.presentation,
            name: newName,
        },
        // history: newHistory,
    };
};

                                              //Slide//
//slice сохранить слайд, insert в массив на нужное место
function moveSlide(presentationMaker: PresentationMaker, newSlidePosition: number): PresentationMaker {
    let newHistory: History = addActionToHistory(presentationMaker);

    const presentation = presentationMaker.presentation
    const selection: SelectionType = presentationMaker.selection;
    let i: number;
    let iSlide: Slide;
    let newSlideList: Slide[] = presentation.slidelist;

    for(i = 0; i < newSlideList.length; i++)
    {
        if(selection.idSlides.indexOf(newSlideList[i].idSlide) != -1){
            break;
        };
    };
    if(i < newSlidePosition){
        for(i; i < newSlidePosition; i++){
            iSlide = newSlideList[i];
            newSlideList[i] = newSlideList[i+1];
            newSlideList[i+1] = iSlide;
        };
    };
    if(i > newSlidePosition){
        for(i; i > newSlidePosition; i--){
            iSlide = newSlideList[i];
            newSlideList[i] = newSlideList[i-1];
            newSlideList[i-1] = iSlide;
        };
    };
    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: newSlideList,
        },
        // history: newHistory,
    }

};

function addSlide(presentationMaker: PresentationMaker): PresentationMaker {
    // let newHistory: History = addActionToHistory(presentationMaker);

    let newSlide:Slide = {
        elementlist: [],
        idSlide: setNewId(),
        background: '#ffffff',
        effects: 'occurrence',
    };
    let newSlidelist: Slide[] = presentationMaker.presentation.slidelist;

    newSlidelist.push(newSlide);
    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: newSlidelist,
        },
        // history: newHistory,
    };
};

function deleteSlide(presentationMaker: PresentationMaker): PresentationMaker {
    // let newHistory: History = addActionToHistory(presentationMaker);

    const selection: SelectionType = presentationMaker.selection;
    let i: number;
    let iSlide: Slide;
    let newSlideList: Slide[] = presentationMaker.presentation.slidelist;
    for(i = 0; i < newSlideList.length; i++)
    {
        if(selection.idSlides.indexOf(newSlideList[i].idSlide) != -1){
            break;
        };
    };
    for(i; i > newSlideList.length; i--){
        iSlide = newSlideList[i];
        newSlideList[i] = newSlideList[i-1];
        newSlideList[i-1] = iSlide;
    };
    newSlideList.pop();

    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: newSlideList,
        },
        // history: newHistory,
    };
};

function editSlideBackground(presentationMaker: PresentationMaker, newBackground: Background): PresentationMaker {
    // let newHistory: History = addActionToHistory(presentationMaker);

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
        // history: newHistory,
    };
};

function editSlideEffect(presentationMaker: PresentationMaker, newEffect: Effect): PresentationMaker {
    // let newHistory: History = addActionToHistory(presentationMaker);

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
        // history: newHistory,
    };
};    
                                              //Slide//

                                            //Element//                                              

function addElement(presentationMaker: PresentationMaker, newElementConcept: ElementConcept): ElementType {
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

function deleteElement(presentationMaker: PresentationMaker): PresentationMaker {
    // let newHistory: History = addActionToHistory(presentationMaker);

    const selection: SelectionType = presentationMaker.selection;
    let i: number;
    let iElement: ElementType;

    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
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
                }
                return slide;
            }),
        },
        // history: newHistory,
    };
};

function editBorderColor(presentationMaker: PresentationMaker, newColor: Color): PresentationMaker {
    // let newHistory: History = addActionToHistory(presentationMaker);

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
        // history: newHistory,
    };
}

function editBorderWidth(presentationMaker: PresentationMaker, newWidth: number): PresentationMaker {
    // let newHistory: History = addActionToHistory(presentationMaker);

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
        // history: newHistory,
    };
};

function editBorderStyle(presentationMaker: PresentationMaker, newBorderStyle: BorderStyle): PresentationMaker {
    // let newHistory: History = addActionToHistory(presentationMaker);
    
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
        // history: newHistory,
    };
};


function moveElement(presentationMaker: PresentationMaker, x: number, y: number): PresentationMaker {
    // let newHistory: History = addActionToHistory(presentationMaker);

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
        // history: newHistory,
    };
};

function editElementSize(presentationMaker: PresentationMaker, h: number, w: number): PresentationMaker {
    // let newHistory: History = addActionToHistory(presentationMaker);

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
        // history: newHistory,
    };
};

                                         //Element

function addImg(presentationMaker: PresentationMaker, newSrc: string): PresentationMaker {
    // let newHistory: History = addActionToHistory(presentationMaker);
     
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

    for(i = 0; i < presentationMaker.presentation.slidelist.length; i++)
    {
        if(selection.idSlides.indexOf(presentationMaker.presentation.slidelist[i].idSlide) != -1){
            break;
        };
    };

    newElementlist = presentationMaker.presentation.slidelist[i].elementlist;
    newElementlist.push(newElement);

    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
                if (selection.idSlides.indexOf(slide.idSlide) != -1)
                {
                    return {
                        ...slide,
                        elementlist: newElementlist,
                    }
                }
                return slide
            })
        },
        // history: newHistory,
    };
};


function addText(presentationMaker: PresentationMaker, newTextContent: string): PresentationMaker {
    // let newHistory: History = addActionToHistory(presentationMaker);

    let i: number;
    let newElementlist: ElementType[];
    const selection: SelectionType = presentationMaker.selection;
    let newElement: ElementType;
    let elementConcept: ElementConcept = {
        type: 'text',
        color: '#000000',
        textContent:  newTextContent,
        links: '',
        font: 'TimesNewRoman',
        italic: false,
        bold: false,
        underline: false,
    };
    newElement = addElement(presentationMaker, elementConcept);
    

    for(i = 0; i < presentationMaker.presentation.slidelist.length; i++)
    {
        if(selection.idSlides.indexOf(presentationMaker.presentation.slidelist[i].idSlide) != -1){
            break;
        };
    };

    newElementlist = presentationMaker.presentation.slidelist[i].elementlist;
    newElementlist.push(newElement);

    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
                if (selection.idSlides.indexOf(slide.idSlide) != -1)
                {
                    return {
                        ...slide,
                        elementlist: newElementlist,
                    }
                }
                return slide
            })
        },
        // history: newHistory,
    };
};

function addFigure(presentationMaker: PresentationMaker, newFigureConcept: FigureConcept): PresentationMaker {
    // let newHistory: History = addActionToHistory(presentationMaker);

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

    for(i = 0; i < presentationMaker.presentation.slidelist.length; i++)
    {
        if(selection.idSlides.indexOf(presentationMaker.presentation.slidelist[i].idSlide) != -1){
            break;
        };
    };

    newElementlist = presentationMaker.presentation.slidelist[i].elementlist;
    newElementlist.push(newElement);

    return {
        ...presentationMaker,
        presentation: {
            ...presentationMaker.presentation,
            slidelist: presentationMaker.presentation.slidelist.map(slide => {
                if (selection.idSlides.indexOf(slide.idSlide) != -1)
                {
                    return {
                        ...slide,
                        elementlist: newElementlist,
                    }
                }
                return slide
            })
        },
        // history: newHistory,
    };
};

//Text//

function editTextColor(presentationMaker: PresentationMaker, newColor: Color): PresentationMaker {
    // let newHistory: History = addActionToHistory(presentationMaker);

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
        // history: newHistory,
    };
};

function editFont(presentationMaker: PresentationMaker, newFont: string): PresentationMaker {
    // let newHistory: History = addActionToHistory(presentationMaker);

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
        // history: newHistory,
    };
};

function addLink(presentationMaker: PresentationMaker, newLink: string): PresentationMaker {
    // let newHistory: History = addActionToHistory(presentationMaker);

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
        // history: newHistory,
    };
};

function setItalicText(presentationMaker: PresentationMaker): PresentationMaker {
    // let newHistory: History = addActionToHistory(presentationMaker);

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
        // history: newHistory,
    };
};

function setBoldText(presentationMaker: PresentationMaker): PresentationMaker {
    // let newHistory: History = addActionToHistory(presentationMaker);

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
        // history: newHistory,
    };
};

function setUnderlineText(presentationMaker: PresentationMaker): PresentationMaker {
    // let newHistory: History = addActionToHistory(presentationMaker);

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
        // history: newHistory,
    };
};

//Figure

function editFigureLineColor(presentationMaker: PresentationMaker, color: Color): PresentationMaker {
    // let newHistory: History = addActionToHistory(presentationMaker);
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
        // history: newHistory,
    };
};

function editFigureFillColor(presentationMaker: PresentationMaker, color: Color): PresentationMaker {
    // let newHistory: History = addActionToHistory(presentationMaker);

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
        // history: newHistory,
    };
};

//IMG
function editFilter(presentationMaker: PresentationMaker, newFilter: Filter): PresentationMaker {
    // let newHistory: History = addActionToHistory(presentationMaker);

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
        // history: newHistory,
    };
};