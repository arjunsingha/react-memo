import React, {Component} from 'react';
import './App.css';
import FunctionalComp from './components/functionalCom.js'

class App extends Component {
  state = {
    val: 1
  }
  componentDidMount(){
    setInterval(()=>{
      console.log("state Change>>>");
      this.setState({
        val:1
      })
    }, 3000)
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <FunctionalComp val={this.state.val}></FunctionalComp>
        </header>
      </div>
    );
  }
}

export default App;
