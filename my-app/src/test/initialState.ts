import { PresentationMaker } from "../types"

export const initialState:  PresentationMaker = {
    mode: 'editor',
    history: {
        actionlist: [],
        currentIndex: -1,
    },
    selection: {
        idSlides: [],
        idElements: [],
    },
    presentation: {
        slidelist: [
            {
                elementlist:[ 
                    {
                        size: {
                            h: 100,
                            w: 100,
                        },
                        border: {
                            color: {
                                type: 'color',
                                color: '#FFB6C1'},
                            borderStyle: 'solid',
                            width: 40,
                        },
                        position: {
                            x: 321,
                            y: 64,
                        },
                        elementConcept: {
                            type: 'text',
                            color: {
                                type: 'color',
                                color: '#000000' },
                            textContent: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem will uncover many web sites still in their infancy. ', 
                            links: '',
                            size: 14,
                            font: 'Roboto',
                            italic: false,
                            bold: false,
                            underline: false,
                        },
                        idElement: 577,
                    }
                ], 
                background: {
                    type: 'color',
                    color: '#FFFFFF'},
                effects: 'fading',
                idSlide: 1,
                selected: false,
            },   
        ],
        name: 'Презентация без названия',
    },
}
