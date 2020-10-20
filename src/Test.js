import React, { Component } from "react";
import PropTypes from "prop-types"

class Test extends Component{
    
render(){
 const data = this.props.nom.map(pres =>  
    <h4 style={headerStyle} key={pres.id}>{pres.nom} {pres.prenom} {pres.age}
   
    </h4>  )
  return (
    <div>
      {data}
      <h1>{this.props.title}</h1>
    </div>
  )
  
}
}

Test.defaultProps ={
  title: "mon tire par defaut"
}

Test.propsTypes ={
  title: PropTypes.string.isRequired
}

const headerStyle = {
  color: "blue"
}

export default Test