import logo from './logo.svg';
import profilePic from './profilePic.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={profilePic} alt="logo" />
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1>portfolio</h1>
      </header>
    </div>
  );
}

export default App;
