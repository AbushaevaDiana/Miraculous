import { PresentationMaker } from "../../../types"

export const presentationMaker: PresentationMaker = {
    mode: 'editor',
    history: {
        actionlist: [],
        currentIndex: 0,
    },
    selection: {
        idSlides: [],
        idElements: [],
    },
    presentation: {
        slidelist: [
            {
            elementlist:[], 
            background: '#FFFFFF',
            effects: 'fading',
            idSlide: 7,
            },
            {
            elementlist: [{
                size: {
                    h: 100,
                    w: 100,
                },
                border: {
                    color: '#FFB6C1',
                    borderStyle: 'solid',
                    width: 40,
                },
                position: {
                    x: 321,
                    y: 64,
                },
                elementConcept: {
                    type: 'text',
                    color: '#000000',
                    textContent: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem will uncover many web sites still in their infancy. ', 
                    links: '',
                    size: 14,
                    font: 'Roboto',
                    italic: false,
                    bold: false,
                    underline: false,
                },
                idElement: 577,
            }, {
                size: {
                    h: 100,
                    w: 100,
                },
                border: {
                    color: 'transparent',
                    borderStyle: 'none',
                    width: 0,
                },
                position: {
                    x: 21,
                    y: 10,
                },
                elementConcept: {
                    type: 'figure',
                    linecolor: '#00FFFF',
                    fillcolor: '#FFFFFF',
                    figureConcept: 'Round',
                },
                idElement: 123,
            }],
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
                    h: 200,
                    w: 200,
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
                    figureConcept: 'Rectangel',
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
        }],
        name: 'NoName',
    },
}
