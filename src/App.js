import React, { Component } from 'react';
import axios from 'axios';

import Container from './JsonContainer/JsonContainer';

import './App.css';

class App extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
      res => this.setState({users: res.data}) 
    )
  }

  render() {
    const users = this.state.users.map(
      user => <Container key={user.id} userId={user.userId} id={user.id} title={user.title} body={user.body} />
    )
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
        {users}
      </div>
    );
  }
};

export default App;
