type PresentationMaker = {
    presentation: Presentation;
    //history: 
    mode: 'editor' | 'preview';
}

type Presentation = {
    slidelist: Slide[];
    name: string;
    selection: SelectionType;
};

type SelectionType = {
    idSlide: number;
    idElement: number;
};

type Slide = {
    elementlist: ElementType[];
    background: Background;
    effects: 'occurrence' | 'fading';
    slidePosition: number;
    idSlide: number;
};

type Color = string;

type Background = Img | Color;

type ElementType = {
    size: number;
    border: Border;
    position: Position;
    elementConcept: TextType | Img | Figure;
    idElement: number;
};

type Border = {
    color: Color;
    borderStyle: BorderStyle;
    width: number;
};

type BorderStyle = 'solid' | 'dotted' | 'dashed' | 'double';

type Position = {
    x: number;
    y: number;
};

type TextType = {
    color: Color;
    textContent: string;
    links: boolean;
    font: string[]; //уточнить
    italic: boolean;
    bold: boolean;
    underline: boolean;
};

type Img = {
    src: string;
    filter: 'black-white' | 'red' | 'green'; //уточнить
};

type Figure = {
    linecolor: Color;
    fillcolor: Color;
    figureType: Triangel | Round | Rectangel;
};

type Triangel = {
    x1: number;
    x2: number;
    x3: number;
    y1: number;
    y2: number;
    y3: number;
};

type Round = {

};

type Rectangel = {

};


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

function moveSlide(presentation: Presentation, slidePosition: number): Presentation {
    const selection: SelectionType = presentation.selection;
    return {
        ...presentation,
        slidelist: presentation.slidelist.map(slide => {
            if (slide.idSlide == selection.idSlide)
            {
                slide.slidePosition = slidePosition; //уточнить
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

function addElement(presentation: Presentation) {
    return presentation;
};

function deleteElement(presentation: Presentation) {
    return presentation;
};

function addImg(presentation: Presentation, scr: string) {
    return presentation;
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

function editElementSize(presentation: Presentation, size: number): Presentation {
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

function editFilter(presentation: Presentation, filter: string) {
    return presentation;
};

function editTextColor(presentation: Presentation, color: number) {
    return presentation;
};

function editFont(presentation: Presentation, font: string[]) {
    return presentation;
};

function addLink(presentation: Presentation, link: boolean): Presentation {
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
                                text: {
                                    ...element.text,
                                    links: link
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
                                figure: {
                                    ...element.figure,
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
                                figure: {
                                    ...element.figure,
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
                            if (element.text.italic == true){
                                return{
                                    ...element,
                                    text: {
                                        ...element.text,
                                        italic : false
                                    } 
                                }
                            }
                            else{
                                return{
                                    ...element,
                                    text: {
                                        ...element.text,
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
                            if (element.text.bold == true){
                                return{
                                    ...element,
                                    text: {
                                        ...element.text,
                                        bold : false
                                    } 
                                }
                            }
                            else{
                                return{
                                    ...element,
                                    text: {
                                        ...element.text,
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
                            if (element.text.underline == true){
                                return{
                                    ...element,
                                    text: {
                                        ...element.text,
                                        underline : false
                                    } 
                                }  
                            }
                            else{
                                return{
                                    ...element,
                                    text: {
                                        ...element.text,
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
