import './normalize.css';
import './App.css';
import './Headmenu.css';
import Headmenu from './Headmenu';
import Slidemenu from './Slidemenu';

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
      </body>
    </div>

  );
}

export default App;
