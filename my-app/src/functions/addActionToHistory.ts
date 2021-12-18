import { Editer, History, Presentation, PresentationMaker, SelectionType } from '../types';

function addActionToHistory(presentationMaker: PresentationMaker): PresentationMaker {
    let newAction: Editer = {
        presentation: presentationMaker.presentation,
        selection: presentationMaker.selection
    };
    let newActionlist: Editer[]; 
    let newCurrentIndex: number = presentationMaker.history.currentIndex;
    let a: number;
 
    //пришлось инициализировать так, чтобы не ругалось
    newActionlist = [];
    
    for(a = 0; a <= newCurrentIndex; a++){
        newActionlist.push(presentationMaker.history.actionlist[a]);
    };

    newActionlist.push(newAction);
    newCurrentIndex = a + 1;
 
    return {
        ...presentationMaker, 
        history: {
            ...history,
            actionlist: newActionlist,
            currentIndex: newCurrentIndex,
        }
    };
};