import { Presentation, PresentationMaker } from "./types";

function undo(presentationMaker: Presentation): PresentationMaker {
    let newHistory: History = presentationMaker.history;
    let i: number = newHistory.currentIndex;
    let newPresentation: Presentation;
    if(i >= 0){
        if (i == (newHistory.actionlist.length - 1)){
            newHistory = addActionToHistory(presentationMaker)
        };
        newPresentation = newHistory.actionlist[i];
    
        i = i - 1;
        newHistory.currentIndex = i;
    };
    return {
       ...presentationMaker,
       presentation: newPresentation,
       history: newHistory,
    };
};


function redo(presentationMaker: PresentationMaker): PresentationMaker{
    const actionlist: Presentation[] = presentationMaker.history.actionlist;
    let i: number = presentationMaker.history.currentIndex;
    let newPresentation: Presentation;
    if (i < (actionlist.length - 2)) {
        i = i + 2;
        newPresentation = actionlist[i];
        i = i - 1;
    };
    
    return {
       ...presentationMaker,
       presentation: newPresentation,
       history: {
           ...presentationMaker.history,
           currentIndex: i,
       },
    };
};