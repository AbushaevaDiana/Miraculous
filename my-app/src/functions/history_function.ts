import { Editer, History, Presentation, PresentationMaker } from '../types';

export function undo(presentationMaker: PresentationMaker): PresentationMaker {
    const newPresentationMaker: PresentationMaker = {
    ...presentationMaker,
    };
    if (presentationMaker.history.currentIndex > 0) {
        newPresentationMaker.history.currentIndex = presentationMaker.history.currentIndex - 1;
        newPresentationMaker.presentation = presentationMaker.history.actionlist[newPresentationMaker.history.currentIndex].presentation;
        newPresentationMaker.selection = presentationMaker.history.actionlist[newPresentationMaker.history.currentIndex].selection;
    }    
    return newPresentationMaker;
}
    
export function redo(presentationMaker: PresentationMaker): PresentationMaker {
    const newPresentationMaker: PresentationMaker = {
        ...presentationMaker,
    };
    
    if (presentationMaker.history.currentIndex < presentationMaker.history.actionlist.length-1 ) {
        newPresentationMaker.history.currentIndex = presentationMaker.history.currentIndex + 1;
        newPresentationMaker.presentation = presentationMaker.history.actionlist[newPresentationMaker.history.currentIndex].presentation;
        newPresentationMaker.selection = presentationMaker.history.actionlist[newPresentationMaker.history.currentIndex].selection;
    }
    
    return newPresentationMaker;
}