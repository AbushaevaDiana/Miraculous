import React from 'react';  
import './normalize.css';
import './App.css';
import { Headmenu } from './Components/Headmenu/Headmenu';
import { Slidemenu } from './Components/SLidemenu/Slidemenu';
import { PresentationContent } from './Components/Presentation-content/Presentation-content';
import { presentationMaker } from './test/model';

function App() {
  return (
    <div className='App'>
      <header className='AppHeader'>
        <Headmenu name = {presentationMaker.presentation.name}></Headmenu>
      </header>
      <body className='AppBody'>
        <Slidemenu slidelist = {presentationMaker.presentation.slidelist}></Slidemenu>
        <PresentationContent slide={presentationMaker.presentation.slidelist[1]}></PresentationContent>
      </body>
    </div>
  );
}

export default App;
