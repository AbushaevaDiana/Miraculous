import { Editer, History, Presentation, PresentationMaker } from '../../../types';

//пересмотреть
function undo(presentationMaker: PresentationMaker): PresentationMaker {
    let newHistory: History = presentationMaker.history;
    let i: number = newHistory.currentIndex - 1;
    let newState: Editer = newHistory.actionlist[newHistory.currentIndex];
    if (i >= 0) {    
        newState = newHistory.actionlist[i];
        newHistory.currentIndex = i;
    }; 
    return {
       ...presentationMaker,
       presentation: newState.presentation,
       selection: newState.selection,
       history: newHistory,
    };
};

//пересмотреть
function redo(presentationMaker: PresentationMaker): PresentationMaker {
    let newHistory: History = presentationMaker.history;
    let i: number = newHistory.currentIndex + 1;
    let newState: Editer = newHistory.actionlist[newHistory.currentIndex];
    if(i < newHistory.actionlist.length){
        newState = newHistory.actionlist[i];
        newHistory.currentIndex = i;
    }; 
    return {
       ...presentationMaker,
       presentation: newState.presentation,
       selection: newState.selection,
       history: newHistory,
    };
};