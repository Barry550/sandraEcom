import React, { Component } from 'react'

class Header extends Component{
  render(){
    return(
      <div>
        <nav className="navbar navbar-expand-sm bg-danger navbar-dark mb-3">
          <div className="container">
          <a href="/" className="navbar-brand">Liste des Contacts</a>

          </div>
       

        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
              Accueil

              </a>
            </li>
          </ul>
        </div>
        </nav>
      </div>
    )
  }
}

export default Header