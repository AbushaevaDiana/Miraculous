import React from 'react';  
import './normalize.css';
import './App.css';
import  Headmenu from './Components/Headmenu/Headmenu';
import  Slidemenu   from './Components/SLidemenu/Slidemenu';
import PresentationContent from './Components/Presentation-content/Presentation-content';
import { PresentationMaker} from './types';
import { connect } from 'react-redux';
import  Preview  from './Components/Preview/Preview';
import { undoAct, redoAct } from './store/actionsCreators/historyActionCreators';


interface AppProps {
  presentationMaker: PresentationMaker,
  undoAct: (presentationMaker: PresentationMaker) => void,
  redoAct: (presentationMaker: PresentationMaker) => void,
}


function App(props: AppProps) {
    if(props.presentationMaker.mode === 'editor'){
    return (
      <div className='App'>
        <div className='AppHeader'>
          <Headmenu></Headmenu>
        </div>
        <div className='AppBody'>
          <Slidemenu></Slidemenu>
          <PresentationContent ></PresentationContent>
        </div>
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

