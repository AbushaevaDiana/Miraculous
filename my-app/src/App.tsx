import React from 'react';  
import './normalize.css';
import './App.css';
import { Headmenu } from './Components/Headmenu/Headmenu';
import { Slidemenu } from './Components/SLidemenu/Slidemenu';
import { PresentationContent } from './Components/Presentation-content/Presentation-content';
import { presentationMaker } from '../../js/model';

function App() {
  return (
    <div className='App'>
      <header className='AppHeader'>
        <p className='headtext'>
          Презентация Miraculous: Without name
        </p>
        <Headmenu></Headmenu>
      </header>
      <body className='AppBody'>
        <Slidemenu slidelist = {[]}></Slidemenu>;
        <PresentationContent></PresentationContent>
      </body>
    </div>
  );
}

export default App;
