import React, {Component} from 'react';

class MessageDetails extends Component {
  state={
    allMessage:[
      {id:1,title:'message001'},
      {id:2,title:'message002'},
      {id:3,title:'message003'},
      {id:4,title:'message004'}
    ]
  }
  render () {
    const messageDetails= this.state.allMessage
    const id =this.props.match.params.id
    const md = messageDetails.find(item => item.id===id*1)
    return (
      <div>
        <ul>
          <li>ID:{md.id}</li>
          <li>title:{md.title}</li>
        </ul>
      </div>
    );
  }
}

export default MessageDetails;
