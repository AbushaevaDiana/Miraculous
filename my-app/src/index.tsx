import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from './store/store';
import { Editer, PresentationMaker } from './types';
import {saveToHistory} from '../src/functions/addActionToHistory'
import { redoAct, undoAct } from './store/actionsCreators/historyActionCreators';
import { redo, undo } from './functions/history_function';

document.addEventListener('keydown', (e) => {
  if((e.ctrlKey) && (e.key=='z' || e.key=='Z')){
  document.removeEventListener('keydown', ()=>{})
  console.log('ctrl z');
  store.dispatch(undoAct(undo(store.getState())));
  }
  if((e.ctrlKey) && (e.key=='y' || e.key=='Y')){
    document.removeEventListener('keydown', ()=>{})
    console.log('ctrl y');
    store.dispatch(redoAct(redo(store.getState())));
    }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
