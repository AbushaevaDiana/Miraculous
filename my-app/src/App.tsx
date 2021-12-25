import React from 'react';  
import './normalize.css';
import './App.css';
import  Headmenu from './Components/Headmenu/Headmenu';
import  Slidemenu   from './Components/SLidemenu/Slidemenu';
import { PresentationContent } from './Components/Presentation-content/Presentation-content';
import { presentationMaker } from './test/model';
import { Presentation } from './types';
import { connect } from 'react-redux';

interface AppProps {

}

function App() {
  return (
    <div className='App'>
      <header className='AppHeader'>
        <Headmenu></Headmenu>
      </header>
      <body className='AppBody'>
        <Slidemenu></Slidemenu>
        <PresentationContent slide={presentationMaker.presentation.slidelist[1]}></PresentationContent>
      </body>
    </div>
  );
}

//
function mapStateToProps(state: Presentation) {
  return { props: state.slidelist} 
};

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//

// export default App;
