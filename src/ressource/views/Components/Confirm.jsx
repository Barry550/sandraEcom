import React,{Fragment, useContext} from 'react';
import {useDispatch, useSelector} from "react-redux"
import { Link } from 'react-router-dom';
import "./Confirm.css"
import {UserProfileContext} from "../../../Lib/UserProfileContext"
import { resetCart } from '../../../Lib/actions';
export default function Confirm() {

  const userProfile = useContext(UserProfileContext)
  const items = useSelector(state => state.items)
  const dispatch = useDispatch()
  return (
    <Fragment>
    
     <h1 className="display-3 text-center">Thank You!</h1>
      <hr/>
      <h3 className="load text-center">Your order on its way to your home</h3>

      <div className="center" onClick={()=> dispatch(resetCart())}>
      <Link to="/" className="btn btn-primary mt-5">Continue to home</Link>
      </div>
    
      <ul className="text-center h3 mt-3">
  <li>{(userProfile.lastname).toUpperCase()}, {userProfile.firstname}</li>
  <li>{userProfile.address}</li>
  <li>{userProfile.zipCode}</li>
      </ul>
    </Fragment>
  );
}
