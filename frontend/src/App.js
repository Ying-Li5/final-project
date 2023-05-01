// insert routing here

import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// components
import Nav from './components/Nav/Nav'
import Login from './components/LoginPage/Login'
import User from './components/UserPage/User'
import Main from './components/MainPage/Main'
import GameDisplay from './components/GameDisplay/GameDisplay'
import ReviewDisplay from './components/ReviewDisplay/ReviewDisplay';

export default function App() {
  return (
    <div className="App">
      <Nav />
      {/* routing -- need to be fixed */}
      <BrowserRouter>
        <Switch>
          <Route path='/' component= { Main } />
          <Route path='/login' component={ Login }/>
          <Route path='/game/' component={ GameDisplay } />
          <Route path='/user/' component={ User } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}