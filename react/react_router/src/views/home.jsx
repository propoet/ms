import React, {Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import MyNavLink from "../components/my-nav-link";
import Message from "./message";
import News from "./news";
class Home extends Component {
  render () {
    return (
      <div>
        <h2>Home route component</h2>
        <ul className='nav nav-tabs'>
          <li>
            <MyNavLink to='/home/news'>NEWS</MyNavLink>

          </li>
          <li>
            <MyNavLink to='/home/message'>MESSAGE</MyNavLink>
          </li>
        </ul>
        <div>
          <Switch>
            <Route path='/home/news' component={News}></Route>
            <Route path='/home/message' component={Message}></Route>
            <Redirect to='/home/news' ></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;
