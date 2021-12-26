import React from 'react';  
import './normalize.css';
import './App.css';
import  Headmenu from './Components/Headmenu/Headmenu';
import  Slidemenu   from './Components/SLidemenu/Slidemenu';
import { PresentationContent } from './Components/Presentation-content/Presentation-content';
import { presentationMaker } from './test/model';
import { Presentation, PresentationMaker } from './types';
import { connect } from 'react-redux';
import { addSlide, deleteSlide, gotoSlide } from './store/actionsCreators/slideActionCreators'

interface AppProps {
  gotoSlide: (idSlide: Number) => void,
}

function App(props: AppProps) {
  return (
    <div className='App'>
      <header className='AppHeader'>
        <Headmenu></Headmenu>
      </header>
      <body className='AppBody'>
        <Slidemenu gotoSlide = {props.gotoSlide}></Slidemenu>
        <PresentationContent slide={presentationMaker.presentation.slidelist[1]}></PresentationContent>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//

// export default App;
