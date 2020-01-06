import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class MyNavLink extends Component {
  render () {
    return (
      <div>
        <NavLink {...this.props} activeClassName='activeClass'/>
      </div>
    );
  }
}

export default MyNavLink;
