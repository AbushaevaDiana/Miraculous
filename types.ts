export type PresentationMaker = {
    presentation: Presentation;
    //history: 
    mode: 'editor' | 'preview';
}

export type Presentation = {
    slidelist: Slide[];
    name: string;
    selection: SelectionType;
};

export type SelectionType = {
    idSlide: number;
    idElement: number;
};

export type Slide = {
    elementlist: ElementType[];
    background: Background;
    effects: 'occurrence' | 'fading';
    slidePosition: number;
    idSlide: number;
};

export type Color = string;

export type Background = Img | Color;

export type ElementType = {
    size: number;
    border: Border;
    position: Position;
    elementConcept: ElementConcept;
    idElement: number;
};

export type ElementConcept = TextType | Img | Figure;

export type Border = {
    color: Color;
    borderStyle: BorderStyle;
    width: number;
};

export type BorderStyle = 'solid' | 'dotted' | 'dashed' | 'double' | 'none';

export type Position = {
    x: number;
    y: number;
};

export type TextType = {
    color: Color;
    textContent: string;
    links: boolean;
    font: string[]; //уточнить
    italic: boolean;
    bold: boolean;
    underline: boolean;
};

export type Img = {
    src: string;
    filter: Filter; //уточнить
};

export type Filter = 'none' | 'black-white' | 'red' | 'green';

export type Figure = {
    linecolor: Color;
    fillcolor: Color;
    figureType: Triangel | Round | Rectangel;
};

export type Triangel = {
    x1: number;
    x2: number;
    x3: number;
    y1: number;
    y2: number;
    y3: number;
};

export type Round = {
    radius: number;
    x0: number;
    y0: number;
};

export type Rectangel = {
    higth: number;
    width: number;
};

export * from "./types";