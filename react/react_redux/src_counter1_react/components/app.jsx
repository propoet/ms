import React, {Component} from 'react';

class App extends Component {
  state = {
    count: 0
  }
  increment = () => {
    const {count} = this.state
    const number = this.select.value * 1
    this.setState({count: count + number})
  }
  decrement = () => {
    const {count} = this.state
    const number = this.select.value * 1
    this.setState({count: count - number})
  }

  incrementIfOdd= ()=>{
    const {count} = this.state
    const number = this.select.value * 1
    if(number%2==1){
      this.setState({count: count + number})
    }
  }

  incrementSync=()=>{
    const {count} = this.state
    const number = this.select.value * 1
    setTimeout(()=>{
      this.setState({count: count + number})
    },500)
  }
  render () {
    const {count} = this.state
    return (
      <div>
        <p>click {count} times</p>
        <select ref={(select) => {
          this.select = select
        }}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>
        &nbsp;
        <button onClick={this.decrement}>-</button>
        &nbsp;
        <button onClick={this.incrementIfOdd}> increment if odd</button>
        &nbsp;
        <button onClick={this.incrementSync}>increment sync</button>
      </div>
    );
  }
}

export default App;
