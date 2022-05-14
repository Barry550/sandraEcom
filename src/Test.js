import React, { Component } from "react";


class Test extends Component{
    
render(){

  const data = this.props.nom.map(item => <div key={item.id}>
    {item.nom}  {item.prenom} : {item.age}<br/> 
    <br/>
    
  </div>)
 
  return ( 
    <div>
    {data}
    <button onClick={this.props.diminuer}>Diminuer de 5</button>
    </div>
    
  )
}
}

export default Test