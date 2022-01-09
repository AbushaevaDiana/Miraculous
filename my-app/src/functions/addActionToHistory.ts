import store from '../store/store';
import { Editer, History, Presentation, PresentationMaker, SelectionType} from '../types';

export function saveToHistory( history: History, newPresentation: Presentation, newSelection: SelectionType): History {
  console.log('добавленно в историю', history)
  const newHistory: History = {...history};
  const newState: Editer = {
    presentation: newPresentation,
    selection: newSelection
  }

  newHistory.currentIndex = history.currentIndex+1;

  const newActionlist = newHistory.actionlist.filter(
    (value, currentIndex) => currentIndex <= newHistory.currentIndex && value
  );
  newHistory.actionlist = [...newActionlist, newState];
  return newHistory
}

export default (saveToHistory)