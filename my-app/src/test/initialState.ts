import { PresentationMaker } from "../types"

export const initialState:  PresentationMaker = {
    mode: 'editor',
    history: {
        actionlist: [],
        currentIndex: -1,
    },
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
}
