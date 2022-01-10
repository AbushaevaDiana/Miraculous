import { PresentationMaker } from "../types"

export const initialState:  PresentationMaker = {
    mode: 'editor',
    selection: {
        idSlides: [1],
        idElements: [],
    },
    presentation: {
        slidelist: [
            {
                elementlist:[], 
                background: {
                    type: 'color',
                    color: '#FFFFFF'},
                effects: 'fading',
                idSlide: 1,
                selected: true,
            },   
        ],
        name: 'Презентация без названия',
    },
    history: {
        actionlist: [
            {
            presentation: {
                slidelist: [
                    {
                        elementlist:[], 
                        background: {
                            type: 'color',
                            color: '#FFFFFF'},
                        effects: 'fading',
                        idSlide: 1,
                        selected: true,
                    },   
                ],
                name: 'Презентация без названия',
            },
            selection: {
                idSlides: [1],
                idElements: [],
            },}
        ],
        currentIndex: 0,
    },
}
