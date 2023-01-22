import logo from './logo.svg';
import './App.css';
// import * as dotenv from 'dotenv';


function App() {

  // //testing dotenv
  // dotenv.config()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    
      <p>Testing Environment  variable: {process.env.REACT_APP_NOT_SECRET_CODE} </p>
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
