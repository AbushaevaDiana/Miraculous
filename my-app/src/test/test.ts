import { Slide } from "../types";

export const slidelist: Slide[] = [{
    elementlist: [],
    background: '#000',
    effects: 'occurrence',
    idSlide: 44,
}, {
    elementlist: [{
        size: {
            h: 100,
            w: 100,
        },
        border: {
            color: '#FF00FF',
            borderStyle: 'dashed',
            width: 10,
        },
        position: {
            x: 215,
            y: 67,
        },
        elementConcept: {
            type: 'img',
            src: 'img/picture2.png',
            filter: 'none',
        },
        idElement: 352,
    }, {
        size: {
            h: 3,
            w: 4,
        },
        border: {
            color: 'transparent',
            borderStyle: 'none',
            width: 0,
        },
        position: {
            x: 45,
            y: 90,
        },
        elementConcept: {
            type: 'figure',
            linecolor: '#696969',
            fillcolor: '#000000',
            figureConcept: "Rectangel",
        },
        idElement: 21223,
    }],
    background: '#FFFFFF',
    effects: 'fading',
    idSlide: 7785,
}, {
    elementlist: [],
    background: '#808080',
    effects: 'occurrence',
    idSlide: 13414,
}];