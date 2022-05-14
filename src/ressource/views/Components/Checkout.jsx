import React,{useState,useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserProfileContext } from '../../../Lib/UserProfileContext';

export default function Checkout() {

  const [isValid, setValid] = useState(false)

  const value = useContext(UserProfileContext)

  const {
    firstname,
    lastname,
    email,
    address,
    zipCode,
    city,
    setUserProfileContext
  } = value

  const validate = () =>{
    let errors = []
    const inputs = document.querySelectorAll(".form-control")
    inputs.forEach(input =>{
      !input.value ? errors.push(input) : errors.length && errors.pop()
    })
    console.log(errors);
    setValid(!errors.length)
  }

  useEffect(()=>{
    validate()
  })

  const change = e =>{
   
    setUserProfileContext({
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className="col-sm-6 offset-3">
      <h2>Checkout</h2>
      <br/>
      <form>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label for="inputEmail4">Nom</label>
        <input type="text" 
        defaultValue={firstname}
        name="firstname" onChange={change}
        className="form-control" id="inputEmail4" placeholder="Votre Nom"/>
      </div>
      <div className="form-group col-md-6">
        <label for="inputPassword4">Prenom</label>
        <input type="text" 
        defaultValue={lastname}
        name="lastname" onChange={change}
        className="form-control" id="inputPassword4" placeholder="Votre Prenom"/>
      </div>
    </div>
    <div className="form-group">
      <label for="inputAddress">Email address</label>
      <input type="text" 
      defaultValue={email}
      name="email" onChange={change}
      className="form-control" id="inputAddress" placeholder="1234 Main St"/>
      <small id="passwordHelpBlock" class="form-text text-muted">
      nous ne partageons jamais votre e-mail avec quelqu'un d'autre
</small>
    </div>
    <div className="form-group">
      <label for="inputAddress2">Address</label>
      <input type="text" 
      defaultValue={address}
      name="address" onChange={change}
      className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
    </div>
  
      <div className="form-row">
      <div className="form-group col-md-6">
        <label for="inputZip">Code postal</label>
        <input type="text" 
        defaultValue={zipCode}
        name="zipCode" onChange={change}
        className="form-control" id="inputZip" placeholder="Votre Code Postal"/>
      </div>
      <div className="form-group col-md-6">
        <label for="inputCity">City</label>
        <input type="text" 
        defaultValue={city}
        name="city" onChange={change}
        className="form-control" placeholder="Votre Cite" id="inputCity"/>
      </div>

    </div>
    <div className="form-group">
      {/* <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck"/>
        <label className="form-check-label" for="gridCheck">
          Check me out
        </label>
      </div> */}
    </div>

    <Link to="/confirm" className={`${!isValid && 'disabled'} btn btn-primary btn-lg btn-block`}>
      Confirmer
    </Link>
  </form>
    </div>
  );
}
