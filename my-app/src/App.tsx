import React from 'react';  
import './normalize.css';
import './App.css';
import  Headmenu from './Components/Headmenu/Headmenu';
import  Slidemenu   from './Components/SLidemenu/Slidemenu';
import PresentationContent from './Components/Presentation-content/Presentation-content';
import { initialState } from './test/initialState';
import { Presentation, PresentationMaker, SelectionType } from './types';
import { connect } from 'react-redux';
import { addSlide, deleteSlide, gotoSlide } from './store/actionsCreators/slideActionCreators'
import { addActionToHistory } from './store/actionsCreators/historyActionCreators'

interface AppProps {
  gotoSlide: (idSlide: Number) => void,
  addActionToHistory: (presentation: Presentation, selection: SelectionType) => void,
  state: PresentationMaker,
}

function App(props: AppProps) {
  return (
    <div className='App'>
      <header className='AppHeader'>
        <Headmenu></Headmenu>
      </header>
      <body className='AppBody'>
        <Slidemenu gotoSlide = {props.gotoSlide}></Slidemenu>
        <PresentationContent></PresentationContent>
      </body>
    </div>
  );
}

//
function mapStateToProps(state: PresentationMaker) {
  return{state: state}
};

const mapDispatchToProps = {
  gotoSlide,
  addActionToHistory
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//

// export default App;
