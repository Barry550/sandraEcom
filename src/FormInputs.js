import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


class FormInputs extends Component{

  state = {
    nom:  '',
    age: '',
    ville: '',
    items: []
  }

  change = e =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }


    submit = e =>{
      e.preventDefault()
      this.setState({
        nom: '',
        age:'',
        ville:'',
        items: [...this.state.items, {nom: this.state.nom, age: this.state.age, ville: this.state.ville}]
      })
    }

    Card = () =>{
        return this.state.items.map((item, i)=>{
          return(
            <div className="card mb-3" key={i}>
              <div className="card-body" >
                <h3>{item.nom}</h3>
          <p>tu as {item.age} ans</p>
          <p>tu habite {item.ville}</p>
              </div>
            </div>
          )
        })
    }

  render(){
    return(
      <React.Fragment>
        <div className="card-header"> Ajouter un USER</div>
        <div className="card">

        <form onSubmit={this.submit}>
          <div className="card-body mb-3">
          <div className="form-group">
            <label htmlFor="nom">Nom</label>
            <input type="text" className="form-control form-control-lg" name="nom" onChange={this.change} value={this.state.nom}/>
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="text" className="form-control form-control-lg" name="age" onChange={this.change} value={this.state.age}/>
          </div>

          <div className="form-group">
            <label htmlFor="ville">Ville</label>
            <input type="text" className="form-control form-control-lg" name="ville" onChange={this.change} value={this.state.ville}/>
          </div>

          <button className="btn btn-primary btn-block">Creez un Ficher USER</button>

          </div>
        </form>
        </div>
      {this.Card()}
      </React.Fragment>
    )
  }

}

export default FormInputs;


