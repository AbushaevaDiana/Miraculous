import store from '../store/store';
import { Editer, History, Presentation, PresentationMaker, SelectionType } from '../types';

function addActionToHistory(presentationMaker: PresentationMaker): PresentationMaker {
    let newAction: Editer = {
        presentation: presentationMaker.presentation,
        selection: presentationMaker.selection
    };
    let newActionlist: Editer[] = presentationMaker.history.actionlist; 
    let newCurrentIndex: number = presentationMaker.history.currentIndex;
    let a: number;
  
    return {
        ...presentationMaker, 
        history: {
            ...presentationMaker.history,
            actionlist: newActionlist.concat([newAction]),
            currentIndex: (newCurrentIndex + 1),
        }
    };
};

function saveState(prog: PresentationMaker) {
    const serializedState = JSON.stringify(prog)
    localStorage.setItem("stateProgram", serializedState)
  }

export function saveToHistory() {
    const newState = store.getState()
    addActionToHistory(newState)
    saveState(newState)
  
    store.subscribe(() => {
      const newState = store.getState()
      if(newState.mode !== 'preview') {
        addActionToHistory(newState) 
        saveState(newState)
      }
      console.log('добавление в историю работает')
    }) 
  }

  export default (saveToHistory)