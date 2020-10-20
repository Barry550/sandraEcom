import React, { Component } from 'react'

class InputForm extends Component{
   state = {
    NameList:[
      {
        Nom: null,
        Prenom: null,
        Color: null
      }

    ]
  }

  change = (e) =>{
    this.setState(
      {
        [e.target.id]: e.target.value
      }
    )
  }

  submit = (e) =>{
    e.preventDefault()
    this.props.addUser(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <label htmlFor="nom">Nom:        </label>
          <input type="text" id="nom" onChange={this.change}/>
          <br/> <br/>

          <label htmlFor="prenom">Prenom:   </label>
          <input type="text" id="prenom" onChange={this.change}/>
          <br/> <br/>

          <label htmlFor="color">Color:     </label>
          <input type="text" id="color" onChange={this.change}/>
          <br/><br/>


          <button>Ajouter</button>
        </form>
      </div>
    )
  }
}

export default InputForm