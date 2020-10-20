import React, { Component } from 'react'
import {connect} from "react-redux"
import {Link} from "react-router-dom"

class Accueil extends Component{
      render(){
        const {posts} = this.props
        const data = posts.length ? (
          posts.map(list =>{
            return(
              <div key={list.id}>
                <Link to={"/"+ list.id}>
                <h2 className="title">{list.title}</h2>
                </Link>  
                <p>{list.body}</p>
              </div>
            )
          })
        ) : (
          <div>
         <p>aucun blog trouver</p>
          </div>
        )
        return(
          <div>
            {data}
          </div>
        )
      }
}

const mapStateToProps = state =>{
  return{
    posts:state.posts
  }
}

export default connect(mapStateToProps)(Accueil)