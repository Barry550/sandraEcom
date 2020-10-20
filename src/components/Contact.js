import React, { Component } from "react"
import "../Style.css"
class Contact extends Component{

  state = {
    show: true
  }

  monter = () =>{
  
      this.setState({
        show: !this.state.show
      })
  }
 
  render(){
    return(
      <div className="card card-body mb-3">
      <h4>{this.props.nom}&nbsp;<button onClick={this.monter}>+</button> 
      <button className="b" onClick={this.props.del}>X</button>
      </h4>

      {this.state.show ? ( <ul className="list-group">
        <li className="list-group-item">
          {this.props.email}
        </li>

        <li className="list-group-item">
          {this.props.tel}
        </li>
      </ul>): null}

     

 
      
      </div>
    )
  }

}
      
        


export default Contact
