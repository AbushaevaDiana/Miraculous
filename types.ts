export type PresentationMaker = {
    presentation: Presentation, 
    mode: Mode,
    history: History,
    selection: SelectionType,
}

export type Mode = 'editor' | 'preview'; 

export type Presentation = {
    slidelist: Slide[],
    name: string,
};

export type History = {
    actionlist: Presentation[],
    //объединить типы presentation и selection и сделать массив элементов этого общего типа
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
};

export type Effect = 'occurrence' | 'fading';

export type Color = string;

export type Background = Img | Color;

export type ElementType = {
    size: Size,
    border: Border,
    position: Position,
    elementConcept: ElementConcept,
    idElement: number,
};

export type Size = {
    h: Number,
    w: Number,
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

export type Filter = 'none' | 'black-white' | 'red' | 'green';

export type Figure = {
    type: 'figure',
    linecolor: Color,
    fillcolor: Color,
    figureConcept: FigureConcept,
};

export type FigureConcept = "Triangel" | "Round" | "Rectangel";

export * from "./types";