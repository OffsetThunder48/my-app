import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Users from './Users/Users';
import User from './User/User'

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="app-header">
            <ul>
              <li>Dummy 1</li>
              <li>Dummy 2</li>
              <li>Dummy 3</li>
              <li>Dummy 4</li>
            </ul> 
          </header>
          <Route path="/" exact component={Users}/>
          <Route path="/users" exact component={Users}/>
          <Route path="/users/:id" exact component={User} />
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
