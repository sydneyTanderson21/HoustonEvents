import logo from './logo.svg';
import './App.css';
import React, { Component, useEffect, useState } from "react";
import axios from 'axios';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  const [data, setData] = useState(null);
  
  const fetchExpressData = () => {
    try {
      axios.get("/api")
      .then(res => {
        const val = res.data.message;
        setData({data: val});
        console.log(val);
      })
    } catch (e){
      console.log(e);
    }
  };

  useEffect(() =>{
    fetchExpressData();
  }, []);

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
        <p>{!data ? "Loading..." : data.data}</p>
      
      </header>
    </div>

      <Routes>
        <Route path="/" element={<Home name='TEST DUMMY' />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );

  function Home({name}) {
    return <h2>Hello, {name}! </h2>;
  }
  
  function About() {
    return <h2>About!</h2>;
  }


}
