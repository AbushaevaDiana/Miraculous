import { createStore } from 'redux';
import rootReducer, { state }  from './reducers/presentationReduser';


let store = createStore(rootReducer, state);

export default store;