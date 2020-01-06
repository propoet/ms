import React, {Component} from 'react';
import MessageDetails from "./message-details";
import {Link,Route} from 'react-router-dom'
import MyNavLink from "../components/my-nav-link";

class Message extends Component {
  state={
    messages:[]
  }
  componentDidMount () {
    setTimeout(()=>{
      const messages = [
        {id:1,title:'message001'},
        {id:2,title:'message002'},
        {id:3,title:'message003'},
        {id:4,title:'message004'}
      ]
      this.setState({messages})
    },1000)
  }
  ShowDetail = (id) => {
    this.props.history.push(`/home/message/${id}`)
  }

  ShowDetail2 = (id) => {
    this.props.history.replace(`/home/message/${id}`)
  }

  back = () => {
    this.props.history.goBack()
  }

  forward = () => {
    this.props.history.goForward()
  }

  render () {
    const {messages} =this.state
    return (
      <div>
        <ul>
          {
            messages.map((item,index)=>{
              return(
                <li key={index}>
                  <MyNavLink to={`/home/message/${item.id}`}>
                    {item.title}
                  </MyNavLink>
                  &nbsp;&nbsp;&nbsp;
                  <button onClick={() => this.ShowDetail(item.id)}>查看详情(push)</button>&nbsp;
                  <button onClick={() => this.ShowDetail2(item.id)}>查看详情(replace)</button>
                </li>
              )
            })
          }
        </ul>
        <p>
          <button onClick={this.back}>返回</button>&nbsp;
          <button onClick={this.forward}>前进</button>&nbsp;
        </p>
        <hr/>
        <Route path='/home/message/:id' component={MessageDetails}></Route>
      </div>
    );
  }
}

export default Message;
