export type ActionType = any

export enum StateTypes {
    ADD_SLIDE = 'ADD_SLIDE',
    DELETE_SLIDE = 'DELETE_SLIDE',
    MOVE_SLIDE = 'MOVE_SLIDE',
    GOTO_SLIDE = 'GOTO_SLIDE',
    EDIT_SLIDE_BACKGROUND_COLOR = 'EDIT_SLIDE_BACKGROUND_COLOR',
    CHANGE_PRESENTATION_NAME = 'CHANGE_PRESENTATION_NAME',
    Undo = 'Undo',
    Redo = 'Redo',
    CHANGE_TEXT_CONTENT = 'CHANGE_TEXT_CONTENT', 
    MOVE_ELEMENT = 'MOVE_ELEMENT',
    GOTO_ELEMENT = 'GOTO_ELEMENT',
    ADD_TEXT = 'ADD_TEXT',
    ADD_PICTURE = 'ADD_PICTURE',
    DELETE_ELEMENT = 'DELETE_ELEMENT',
    ADD_ROUND = 'ADD_ROUND',
    ADD_RECTANGLE = 'ADD_RECTANGLE',
    ADD_TRIANGLE = 'ADD_TRIANGLE', 
}

export type PresentationMaker = {
    readonly presentation: Presentation, 
    mode: Mode,
    history: History,
    selection: SelectionType,
}

export type Mode = 'editor' | 'preview'; 

export type Presentation = {
    slidelist: Slide[],
    name: string,
};

export type Editer = {
    presentation: Presentation;
    selection: SelectionType;
};

export type History = {
    actionlist: Editer[],
    currentIndex: number,
};

export type SelectionType = {
    idSlides: number[],
    idElements: number[],
};

export type Slide = {
    elementlist: ElementType[],
    background: Background,
    effects: Effect,
    idSlide: number,
    selected: boolean,
};

export type Effect = 'occurrence' | 'fading';

export type Color = {
    type: 'color',
    color: string,
};

export type Background = Img | Color;

export type ElementType = {
    size: Size,
    border: Border,
    position: Position,
    elementConcept: ElementConcept,
    idElement: number,
    selected: boolean,
};

export type Size = {
    h: number,
    w: number,
};

export type ElementConcept = TextType | Img | Figure;

export type Border = {
    color: Color,
    borderStyle: BorderStyle,
    width: number,
};

export type BorderStyle = 'solid' | 'dotted' | 'dashed' | 'double' | 'none';

export type Position = {
    x: number,
    y: number,
};

export type TextType = {
    type: 'text',
    color: Color,
    textContent: string,
    links: Link,
    size: number;
    font: string,
    italic: boolean,
    bold: boolean,
    underline: boolean,
};

export type Link = string;

export type Img = {
    type: 'img',
    src: string,
    filter: Filter,
};

export type Filter = 'none' | 'black-white' | 'red' | 'green' | 'blue';

export type Figure = {
    type: 'figure',
    linecolor: string,
    fillcolor: string,
    figureConcept: FigureConcept,
};

export type FigureConcept = "Triangel" | "Round" | "Rectangel";

export * from "./types";