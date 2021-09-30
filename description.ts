// const presentationMaker = {
//     presentation,  
//     history,
//     mode,
// }

type PresentationMaker = {
    presentation: Presentation;
    //history: 
    mode: 'editor' | 'preview';
}

// const mode: 'editor' | 'preview' = 'editor';

type Presentation = {
    slidelist: Slide[];
    name: string;
    selection: SelectionType;
};

type SelectionType = {   //пришлось поменять название, VSC ругался, что уже зарезервировано в библиотеке это слово
    idSlide: number;
    idElement: number;
};

type Slide = {
    element: ElementType;
    background: Background;
    effects: 'occurrence' | 'fading';
};

type Background = {
    img: Img;
    color: number;
};

type ElementType = {
    size: number;
    border: Border;
    position: Position;
    text: TextType;
    img: Img;
    figure: Figure;
};

type Border = {
    color: number;
    borderStyle: 'solid' | 'dotted' | 'dashed' | 'double';
    width: number;
};

// const borderStyle = ‘solid’ | ‘dotted’ | ‘dashed’ | ‘double’ я тут объединила его прямо в тип Border, но не уверена, можно так или нет

type Position = {
    x: number;
    y: number;
};

type TextType = {
    color: number;
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
    linecolor: number;
    fillcolor: number;
    figureType: 'triangel' | 'round' | 'rectangle';
};

// const figureType = ‘triangel’ | ‘round’ | ‘rectangle’

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

function editPresentationName(presentation: Presentation, name: string) {
    return presentation;
};

function moveSlide(presentation: Presentation, slidePosition: number) {
    return presentation;
};

function addSlide(presentation: Presentation)  {
    return presentation;
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

function editBorderColor(presentation: Presentation, color: number) {
    return presentation;
};

function editBorderWidth(presentation: Presentation, width: number) {
    return presentation;
};

function editBorderStyle(presentation: Presentation, borderStyle: string) {
    return presentation;
};


function moveElement(presentation: Presentation, x: number, y: number) {
    return presentation;
};

function editElementSize(presentation: Presentation, size: number) {
    return presentation;
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

function addLink(presentation: Presentation, link: boolean) {
    return presentation;
};

function editFigureLineColor(presentation: Presentation, lineColor: number) {
    return presentation;
};

function editFigureFillColor(presentation: Presentation, fillColor: number) {
    return presentation;
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

function setItalicText(presentation: Presentation) {
    return presentation;
};

function setBoldText(presentation: Presentation) {
    return presentation;
};

function setUnderlineText(presentation: Presentation) {
    return presentation;
};

