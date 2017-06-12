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
          <svg height={100} className="GameBox">
            <svg>
              <circle className={"wheel"} cx={20} cy={90} r={10} fill="white" stroke="black" />
              <rect x={10} y={60} width={20} height={20} fill="white" stroke="black"/>
            </svg>

            {/* <rect className="level-item" x={150} y={0} width={20} height={20}/> */}
            <rect className="level-item" x={150} y={80} width={20} height={20}/>

          </svg>
        </div>
        <div className="Instructions">
          <div>Head head = new Head();</div>
          <div>Backpack backPack = new BackPack();</div>
          <div>Bot botty = new Bot(Head head, BackPack backpack);</div>
          <div> botty.headAction() </div>
          <div> botty.backPackAction() </div>
        </div>
        <button>Go!</button>
      </div>
    );
  }
}

export default App;

//
// <div>Head head = new Head();</div>
// <div>Backpack backPack = new BackPack();</div>
// <div>Bot botty = new Bot(Head head, BackPack backpack);</div>
