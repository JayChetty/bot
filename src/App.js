import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'

// const code = "Head head = new Head();Backpack backPack = new BackPack();Bot botty = new Bot(Head head, BackPack backpack);"
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Feedback">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="Instructions">
          <div>Head head = new Head();</div>
          <div>Backpack backPack = new BackPack();</div>
          <div>Bot botty = new Bot(Head head, BackPack backpack);</div>
          <div> botty.headAction() </div>
          <div> botty.backPackAction() </div>
        </div>
      </div>
    );
  }
}

export default App;

//
// <div>Head head = new Head();</div>
// <div>Backpack backPack = new BackPack();</div>
// <div>Bot botty = new Bot(Head head, BackPack backpack);</div>
