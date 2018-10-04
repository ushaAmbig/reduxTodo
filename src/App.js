import React, { Component } from 'react';
import './App.css';
import List from './List';
import AddTodo from './AddTodo';

class App extends Component {
 
  render() {
    return (
      <div className="container-fluid">
      <List />
      <AddTodo />
      </div>
    );
  }
}

export default App;
