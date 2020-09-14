import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Users from './Users/Users';
import User from './User/User';

import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="app-header">
            <ul>
              <li>Dummy 1</li>
              <li>Dummy 2</li>
              <li>Dummy 3</li>
              <li>Dummy 4</li>
            </ul> 
          </header>
          {this.spinner}
          <Route path="/users/" exact component={Users} />
          <Route path="/users/:id" exact component={User} />
          <Route path="/" component={Users} />
        </div>
      
    );
  }
};

export default App
