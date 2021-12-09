import React from 'react';  
import './normalize.css';
import './App.css';
import './Headmenu.module.css';
import Headmenu from './Headmenu';
import Slidemenu from './Slidemenu';
import PresentationContent from './Presentation-content';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="headtext">
          Презентация Miraculous: Without name
        </p>
        <Headmenu></Headmenu>
      </header>
      <body className="App-body">
        <Slidemenu></Slidemenu>
        <PresentationContent></PresentationContent>
      </body>
    </div>
  );
}

export default App;
