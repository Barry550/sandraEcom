import React, { Component } from 'react';
import "./Bouton.css"
import Modal from './Modal';

class Bouton extends Component{
  
  state = {
    visible: false
  }

  montre = () =>{
    this.setState({
      visible: true
    })
  }

  cache = () =>{
    this.setState({
      visible: false
    })

  }

  render(){
    return(
      <div>
        <button className="Bouton" onClick={this.montre}>CLIQUER ICI</button>
        <Modal 
        visible={this.state.visible}
        cache={this.cache}
        />
      </div>
    )
  }
  
}

export default Bouton;

