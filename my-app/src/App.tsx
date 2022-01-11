import React from 'react';  
import './normalize.css';
import './App.css';
import  Headmenu from './Components/Headmenu/Headmenu';
import  Slidemenu   from './Components/SLidemenu/Slidemenu';
import PresentationContent from './Components/Presentation-content/Presentation-content';
import { initialState } from './test/initialState';
import { Presentation, PresentationMaker, SelectionType } from './types';
import { connect } from 'react-redux';
import { addSlide, deleteSlide, gotoSlide } from './store/actionsCreators/slideActionCreators';
import  Preview  from './Components/Preview/Preview';
import { undoAct, redoAct } from './store/actionsCreators/historyActionCreators';
import { undo, redo } from "./functions/history_function"
import store from './store/store';

interface AppProps {
  presentationMaker: PresentationMaker,
  undoAct: (presentationMaker: PresentationMaker) => void,
  redoAct: (presentationMaker: PresentationMaker) => void,
}

function App(props: AppProps) {
  if(props.presentationMaker.mode === 'editor'){
    return (
      <div className='App'  onKeyDown = {(e) => {
        if(e.ctrlKey){
          console.log('ctrl z')
          props.redoAct(redo(store.getState()))
        }
      }}>
        <header className='AppHeader'>
          <Headmenu></Headmenu>
        </header>
        <body className='AppBody'>
          <Slidemenu></Slidemenu>
          <PresentationContent></PresentationContent>
        </body>
      </div>
    )
  }
  else{
    return (
      <Preview></Preview>
    )
  }
}

//
function mapStateToProps(state: PresentationMaker) {
  return{presentationMaker: state}
};

const mapDispatchToProps = {
  redoAct,
  undoAct,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//

// export default App;
