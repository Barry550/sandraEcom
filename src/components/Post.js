import React, { Component } from 'react'
import {connect} from "react-redux"
import {del} from "../action/PostAction"

class Post extends Component{
  handleClick = (e) =>{
    this.props.delete(this.props.post.id)
    this.props.history.push('/')
  }
      render(){
        const post = this.props.post ? (
         <div key={this.props.post.id}>
          <h2 className="title">{this.props.post.title}</h2>
          <p>{this.props.post.body}</p>
          <button onClick={this.handleClick}>delete</button>
        </div>
      
        ) : (
         <p>aucun blog trouver</p>

        )
        return(
          <div>
            {post}
          </div>
        )
      }
}

const mapStateToProps = (state, recherche) =>{
  const id = recherche.match.params.post_id
  return{
    post:state.posts.find(list => list.id === id)
  }
}

const mapDispasher = dispaher =>{
  return{
    delete: id =>{
      dispaher(del(id))
    }
  }
}

export default connect(mapStateToProps,mapDispasher)(Post)