import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lunch from './lunch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Lunch
          lunch="pasta"
          drink="green tea"
          chitchat="talkie talkie"
        />
      </div>
    );
  }
}

export default App;
