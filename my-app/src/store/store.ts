import { createStore, Store } from 'redux';
import { ActionType, Presentation, PresentationMaker } from '../types';
import rootReducer from './reducers/presentationMakerReduser';
import { initialState } from '../test/initialState'


let store: Store<PresentationMaker, ActionType> = createStore(rootReducer, initialState);

export default store;