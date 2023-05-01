// insert routing here

import './App.css';
import React from 'react';
import Nav from './Pages/Nav'
import Login from './Pages/Login'
import User from './Pages/User'
import Main from './Pages/Main'

export default function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Login /> */}
      {/* <User /> */}
      <Main />
    </div>
  );
}