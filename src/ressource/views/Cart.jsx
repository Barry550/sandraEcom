import React,{Fragment, useState, useEffect} from 'react';
import "./Cart.css"
import Table from './Table';
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

export default function Cart() {
  const items = useSelector(state => state.items)

  const [total, setTotal] = useState(0.00)
  const [subTotal, setSubtotal] = useState(0.00)
  const shipping = 10.00

  useEffect(()=>{
    let totals = items.map(items =>{
      return items.quantity * items.details.price
    })

    setSubtotal(totals.reduce((acc, el)=> acc + el, 0))
    setTotal(subTotal + shipping)

  },[items,total,subTotal])

  return (
    <Fragment>
      <div className="container">
      <div className="row">
        <div className="col-sm cart">
          <Table /> 
        </div>
        <div className="col-sm-3">
          <ul className="list-group">
            <li className="list-group-item bg"> Sommation</li>

            <li className="list-group-item bg">
              <ul className="list-group flex-row">
                <li className="text-left">montant a payer</li>
                <li className="text-right ml-auto">{subTotal.toFixed(2)} $</li>
             
              </ul>

              <ul className="list-group flex-row">
                <li className="text-left">frais de livraison</li>
                <li className="text-right ml-auto">{shipping.toFixed(2)} $</li>
             
              </ul>

              <ul className="list-group">
                <li className="crimson">
                  <small> add Coupon code</small>
                </li>
              </ul>
            </li>

            <li className="list-group-item bg">
              <ul className="list-group flex-row">
                <li className="text-left">Total</li>
                <li className="text-right ml-auto">{total === shipping ? "0.00" :  total.toFixed(2)} $</li>
              </ul>
            </li>
          </ul>
        
             <Link to="/checkout"  className={`btn btn-light btn-lg btn-block checkout bg-crimson ${!items.length && 'disabled'}`}>
               Checkout
             </Link>
    
        </div>
      </div>
      </div>
    </Fragment>
  );
}
