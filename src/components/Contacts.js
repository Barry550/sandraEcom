import React, { Component } from "react"
import Contact from "./Contact"

class Contacts extends Component{

    state = {
      Contacts:[
        {
          id: 1,
          nom: "doumans",
          email: "doumans@gmail",
          tel: "000-000-00"
        },

        {
          id: 2,
          nom: "mans",
          email: "mans@gmail",
          tel: "111-111-11"
        },

        {
          id: 3,
          nom: "mamfriz",
          email: "mamfriz@gmail",
          tel: "222-222-22"
        },
      ]
    }

    delContact = (id) =>{
      const Contacter = this.state.Contacts.filter(list => list.id !== id)

this.setState({
        Contacts:Contacter
      })
    }

      render(){
        return(
          <div>
            {this.state.Contacts.map(contacts =>(
              <Contact 
                  key={contacts.id}
                  nom={contacts.nom}
                  email={contacts.email}
                  tel={contacts.tel}
                  del={this.delContact.bind(this, contacts.id)}
              />
            ))}
          </div>
        )
      }
}

export default Contacts