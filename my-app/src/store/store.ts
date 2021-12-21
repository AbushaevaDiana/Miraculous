import { createStore, Store } from 'redux';
import { ActionType, Presentation } from '../types';
import rootReducer, { state }  from './reducers/presentationReduser';


let store: Store<Presentation, ActionType> = createStore(rootReducer, state);

export default store;