import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import HeaderImage from './components/HeaderImage/HeaderImage';
import './App.css';

class App extends Component {
  render() {
    return (
      <header>
        <NavBar />
        <HeaderImage />
      </header>
    );
  }
}

export default App;
