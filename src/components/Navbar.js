import React from 'react'
import {withRouter} from "react-router-dom"
const Navbar = (props) =>{

  return(
   <div>
    <a  href="/">Accueil</a> 
    <br/>
    <a  href="/infos">Infos</a>
    <br/>

    <a  href="/contact">Contact</a>

   </div>
  )
}

export default  withRouter(Navbar)