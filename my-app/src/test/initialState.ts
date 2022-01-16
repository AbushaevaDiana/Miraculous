import { PresentationMaker } from "../types"

export const initialState:  PresentationMaker = {
    mode: 'editor',
    selection: {
        idSlides: [],
        idElements: [],
    },
    presentation: {
        slidelist: [
            {
                elementlist:[], 
                background: {
                    type: 'color',
                    color: '#FFFFFF'},
                effects: 'none',
                idSlide: 1,
                selected: false,
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
                        effects: 'none',
                        idSlide: 1,
                        selected: false,
                    },   
                ],
                name: 'Презентация без названия',
            },
            selection: {
                idSlides: [],
                idElements: [],
            },}
        ],
        currentIndex: 0,
    },
}
