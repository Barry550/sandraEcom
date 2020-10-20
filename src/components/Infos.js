import { render } from '@testing-library/react'
import React, { Component } from 'react'
import {connect} from "react-redux"

class Infos extends Component{

  render(){
    const {base} = this.props
    const data = base.length ? (
      base.map(list =>{
        return(
          <div key={list.id}>
            <h2>{list.title}</h2>
        <p>{list.body}</p>
          </div>
        )
      })
    ) : (
      <p></p>
    )
    return(
      <div>
        {data}
      </div>
    )
  }
  
}

const mapState = state =>{
  return{
    base:state.base
  }
}

export default connect(mapState)(Infos)

