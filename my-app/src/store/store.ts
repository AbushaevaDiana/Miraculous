import { createStore } from 'redux';
import { presentationMaker } from '../test/model';
import { initialState } from '../test/initialState';
import presentationReduser from './reducers/presentationReduser';
let store = createStore(presentationReduser, initialState);

export default store;
// export {}



