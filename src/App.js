import React, { Component } from 'react';
import Home from './components/home/home';
import Work from './components/work/work';
import SecWork from './components/sec-work/sec-work';
import AppBarCom from './components/app-bar/app-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppBarCom/>

      </div>
    );
  }
}

export default App;
