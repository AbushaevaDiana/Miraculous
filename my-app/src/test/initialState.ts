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
                            x: 100,
                            y: 100,
                        },
                        elementConcept: {
                            type: 'text',
                            color: {
                                type: 'color',
                                color: '#000000' },
                            textContent: 'Привет ', 
                            links: '',
                            size: 14,
                            font: 'Roboto',
                            italic: false,
                            bold: false,
                            underline: false,
                        },
                        idElement: 577,
                        selected: false,
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
