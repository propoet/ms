import React, {Component} from 'react';
import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [
                {username: 'zs', content: 'react good'},
                {username: 'ls', content: 'react hard'}
            ]
        }
    }
    //添加评论
    addComment=(comment)=>{
        const {comments} =this.state
        comments.unshift(comment)
        this.setState({comments})
    }
    // 删除指定评论
    deleteComment= (index)=>{
        const {comments} = this.state
        comments.splice(index,1)
        this.setState(comments)
    }

    render() {
        const {comments} = this.state
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={this.addComment} />
                    <CommentList comments ={comments} deleteComment ={this.deleteComment}/>
                </div>
            </div>
        );
    }
}

export default App;
