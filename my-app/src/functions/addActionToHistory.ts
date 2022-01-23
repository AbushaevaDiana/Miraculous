import store from '../store/store';
import { Editer, History, Presentation, PresentationMaker, SelectionType} from '../types';

export function saveToHistory( history: History, newPresentation: Presentation, newSelection: SelectionType): History {
  // console.log('добавленно в историю', history)
  const newHistory: History = {...history};
  // console.log(newHistory)
  const newState: Editer = {
    presentation: newPresentation,
    selection: newSelection
  }

  const oldState: Editer = {
    presentation: newHistory.actionlist[newHistory.currentIndex].presentation,
    selection: newHistory.actionlist[newHistory.currentIndex].selection,
  }

  if(newState != oldState){
    console.log('изменение', oldState, newState)
    newHistory.currentIndex = history.currentIndex+1;

    const newActionlist = newHistory.actionlist.filter(
      (value, currentIndex) => currentIndex <= newHistory.currentIndex && value
    );
    newHistory.actionlist = [...newActionlist, newState];
    // console.log(newHistory)
  }

  return newHistory
}

export default (saveToHistory)