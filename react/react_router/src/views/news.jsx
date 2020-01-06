import React, {Component} from 'react';

class News extends Component {
  state={
    newsArray:[
      'new1',
      'news2',
      'news3'
    ]
  }
  render () {
    const {newsArray}=this.state
    return (
      <div>
        <ul>
          {
            newsArray.map((item,index)=>{
              return (
                <li key={index}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default News;
