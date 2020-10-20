import React, { Component } from "react"
import Calendar from 'react-calendar'
import "./Bouton.css"


class Picker extends Component{

  state = {
    date: new Date(),
    showDate: false
  }

  change = date =>{
    this.setState({
      date
    })
  }
  
  validation = () =>{
    this.setState({
      showDate: true
    })
  }


  reset = () =>{
    this.setState({
      showDate: false
    })
  }
  render(){
    return(
      <div className="Picker" style={{boxShadow:"5px 5px 25px"}} >
        
        <div onClick={this.reset}> 
        <Calendar onChange={this.change} 
        
        selectRange={true}
        value={this.state.date}
        />
       </div>
        
        <button  onClick={this.validation}>valider</button>
    {/* <p>{this.state.date.toLocaleDateString()}</p> */}
    {this.state.showDate ? (
      <div>
             <p>DU : {this.state.date[0].toLocaleDateString()}</p>,
             <p>AU : {this.state.date[1].toLocaleDateString()}</p>
      </div>
    ): null}
      </div>
    )
  }
}

export default Picker