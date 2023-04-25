import './App.css';
import React from 'react';
import Nav from './Pages/Nav'
import Login from './Pages/Login'
import User from './Pages/User'

export default function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Login /> */}
      <User />
    </div>
  );
}