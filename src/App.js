import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'

// const code = "Head head = new Head();Backpack backPack = new BackPack();Bot botty = new Bot(Head head, BackPack backpack);"
const instructions = ["move", "move"]
const ground = ["flat", "flat", "flat", "finish" ]


class App extends Component {
  constructor(props){
    super(props)
    this.state = {started: false}
  }

  _handleClick(){
    console.log("started")
    this.setState({started: true})
  }
  render() {
    if(this.state.started){
      //start animations
      console.log("setting animations")
    }
    return (
      <div className="App">
        <div className="Feedback">
          <svg height={100} className="GameBox">
            <svg>
              <rect className={this.state.started ? "robot-head" : ""}x={15} y={50} width={10} height={10} fill="white" stroke="black"/>
              <rect className={this.state.started ? "robot-body" : ""}x={10} y={60} width={20} height={20} fill="white" stroke="black"/>
              <circle className={"jump"} cx={20} cy={90} r={10} fill="white" stroke="black" />
              <line className={this.state.started ? "spoke vertical-spoke" : ""} x1="20" y1="80" x2="20" y2="100" stroke-width="1" stroke="black"/>
              <line className={this.state.started ? "spoke horizontal-spoke" : ""} x1="10" y1="90" x2="30" y2="90" stroke-width="1" stroke="black"/>
            </svg>

            {/* <rect className="level-item" x={150} y={0} width={20} height={20}/> */}
            <rect className={this.state.started ? " main moved" : "main"} x={150} y={80} width={20} height={20}/>

          </svg>
        </div>
        <div className="instructions">
          <div className="construction">
            <div> Head head = new Head();</div>
            <div> Backpack backPack = new BackPack();</div>
            <div> Bot botty = new Bot(Head head, BackPack backpack);</div>
          </div>
          <div className="action">
            <div> botty.move() </div>
            <div> botty.move() </div>
          </div>
        </div>
        <button onClick={this._handleClick.bind(this)}>Go!</button>
      </div>
    );
  }
}

export default App;

//
// <div>Head head = new Head();</div>
// <div>Backpack backPack = new BackPack();</div>
// <div>Bot botty = new Bot(Head head, BackPack backpack);</div>
