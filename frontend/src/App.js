import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
    <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    
        <p>Testing Environment variable: {process.env.NODE_ENV} </p>
      
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );

  function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About!</h2>;
  }
}

export default App;
