import { Presentation, PresentationMaker } from "./types";

function addActionToHistory(presentationMaker: PresentationMaker): History {
    let newAction: Presentation = presentationMaker.presentation;
    let newHistory: History = presentationMaker.history;
    let newActionlist: Presentation[]; 
    let newCurrentIndex: number = presentationMaker.history.currentIndex;
    let a: number;

    for(a = 0; a <= newCurrentIndex; a++){
        newActionlist.push(presentationMaker.history.actionlist[a]);
    };


    newActionlist.push(newAction);
    newCurrentIndex = newCurrentIndex + 1;
 
    return { 
        ...newHistory,
        actionlist: newActionlist,
        currentIndex: newCurrentIndex,
    };
};