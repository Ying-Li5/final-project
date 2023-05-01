// insert routing here

import './App.css';
import React from 'react';
import Nav from './components/Nav/Nav'
import Login from './components/LoginPage/Login'
import User from './components/UserPage/User'
import Main from './components/MainPage/Main'

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