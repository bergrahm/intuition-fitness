import giga from "./gigachad.png"

import './App.css';
import Landing from './main-page/landing-page'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Landing />
        <img src={giga} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
