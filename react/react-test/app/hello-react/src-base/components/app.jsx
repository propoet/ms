import React, {Component} from 'react';

import logo from '../logo.png'
import '../index.css'
class App extends Component {
  render () {
    return (
      <div>
        <img src={logo} className='logo' alt=""/>
        <p className='title'>react app 组件</p>
      </div>
    );
  }
}

export default App;
