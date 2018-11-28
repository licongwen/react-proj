import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Routers from './routers/index.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routers />
      </div>
    );
  }
}

export default App;
