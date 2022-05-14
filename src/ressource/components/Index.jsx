import React,{useState} from 'react';
import { Link } from 'react-router-dom'; 
import {useDispatch, useSelector} from "react-redux"
import {addToCart} from "../../Lib/actions"
import "./index.css"

export const Navbar = ({filter,setFiltering}) => {
  const item = useSelector(state => state.items)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info p-3 mb-5">
            <a className="navbar-brand" href="#hh">

  
    <div className=" h4 text-white font-weight-bold">
      <Link to="/" className="text-dark">
    <i className="fas fa-shopping-cart"></i> Mes courses en ligne 
      </Link>

  
  </div>
           
            </a>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
          </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" 
          onChange={(e)=>{
            setFiltering(e.target.value.length !== 0)
            filter(e.target.value)
          }  }
            />
        </form>
       
  </div>
  <div className="menu-rigth mr-5">
    <Link to="/Cart" className="text-dark">

  <i className="fas fa-shopping-bag fa-2x"></i>
        <span className="badge badge-pill badge-success">{item.length > 0 && item.length}</span>
    </Link>
  </div>
</nav>
    </div>
  );
}


const Modal = ({item}) =>{
  
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()

  const add = (item, quantity) =>{
    dispatch(addToCart(item, quantity))
  }
    return(
     

<div className="modal fade" id={item.ref}
data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"
role="dialog"
>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
    <h5 className="modal-title" id="exampleModalLabel">{item.name}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="col-sm-4">
          <img className="card-img-top"
            width="200" 
            height="200" 
            src={process.env.PUBLIC_URL + `/assets/${item.category}/${item.image}` }
            alt={item.name}
            />
          </div>
          <div className="col-sm h4">
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing  lorem si ipsum</p>
              <div className="h2 font-weigth-bold">{item.price} $ / {item.unit}</div>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">

                  <label className="btn btn-secondary">
                    <input type="radio" name="options" id="option2" 
                    onClick={()=>setQty(qty => qty === 1 ? 1 : qty - 1
                  
                      )}/> -
                  </label>
                  <div className="btn btn-light">{qty}</div>

                  <label className="btn btn-secondary active">
                    <input type="radio" name="options" id="option1" checked
                    onClick={()=>setQty(qty + 1)}/> +
                  </label>
          
              </div>
        </div>
   
        </div>

      </div>
      <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-success"  
            data-dismiss="modal"
            onClick={()=> add(item,  qty)}
            >Ajouter</button>
      </div>
    </div>
  </div>
</div>
    
    )
}
const Card = ({item}) =>{

  return(
      <div className="col-sm-4 mb-5">
        <div className="card">

        <img className="card-img-top"
            width="170" 
            height="170" 
            src={process.env.PUBLIC_URL + `/assets/${item.category}/${item.image}` }
            alt={item.name}
            />

      <div className="card-body">
        <div className="row">
          <div className="col-sm-6">
            <h4>{item.name}</h4>
          </div>
          <div className="col-sm-6">
            <p>
              {item.price} $ / {item.unit}
            </p>
            <button className="btn btn-primary btn-sm" data-toggle="modal" data-target={`#${item.ref}`}>voir le produit</button>
          </div>
        </div>
      </div>
  </div>
            <Modal item={item}/>
      </div>
  )
}
export const List = ({data,updateCart}) =>{

console.log(data);
  return(
    <div className="col-sm">
      <div className="row">
      {data.map(item => <Card key={item.ref} item={item} updateCart={updateCart}/>)}
      </div>
    </div>
  )
}
