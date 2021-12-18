import { createStore } from 'redux';
import { presentationRedusers } from './reducers/presentationReduser';
import { presentationMaker } from '../test/model';
import { initialState } from '../test/initialState';

let store = createStore(presentationRedusers, initialState);

// export default store;
export {}