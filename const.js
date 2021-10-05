const presentationMaker = {
    presentation,  
    history,
    mode,
};

const mode = 'editor' | 'preview';

const presentation = {
    slidelist,
    name,
    selection,
};

const selection = {
    idSlide,
    idElement,
};

const slidelist = [slide];

const slide = {
    element,
    background,
    effects,
    idSlide,
};

const background = {
    img,
    color,
};

const element = {
    size,
    border,
    position,
    text,
    img,
    figure,
    idElement,
};

const border = {
    color,
    borderStyle,
    width,
};

const borderStyle = 'solid' | 'dotted' | 'dashed' | 'double' ;

const position = {
    x,
    y,
};

const text = {
    color,
    textContent,
    textStyle,
    links,
    font,
    italic,
    bold,
    underline,
};


const img = {
    scr,
    filter,
};

const figure = {
    lineColor,
    fillColor,
    figureType,
};

const figureType = 'triangel' | 'round' | 'rectangle';
