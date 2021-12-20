import { PresentationMaker } from "../types"

export const initialState:  PresentationMaker = {
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
                idSlide: 1,
            },   
        ],
        name: 'NoName',
    },
}
