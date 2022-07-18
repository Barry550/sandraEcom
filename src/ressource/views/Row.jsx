import React,{useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {updateCart,removeFromCart} from "../../Lib/actions";

export default function Row(props) {

  const {id,quantity, details} = props.items
  const [qty, setQty] = useState(quantity)
  const dispatch = useDispatch()


  const update = (action) =>{
    if(action === "increment") {setQty(qty + 1)}
    if(action === "decrement") {setQty(qty <= 1 ? 1 : qty - 1)}
    console.log(qty);
  }
  
  useEffect(()=>{
    dispatch(updateCart(id, qty))
  },[qty, dispatch, id])


  const remove = id =>{
    dispatch(removeFromCart(id))
  }

  return (
    <tr>
      <td>
        <img 
          width="70"
          height="70"
          src={process.env.PUBLIC_URL + `/assets/${details.category}/${details.image}`}
          alt="citron"
        />
      </td>
  <td>{details.ref}  </td>
      <td>  {details.price} $</td>
      <td>
    
    <button className="btn btn-secondary" onClick={()=> update("decrement")} > - </button>
  
  <div className="btn btn-light">{qty}</div>

    <button  className="btn btn-secondary active" checked onClick={()=> update("increment")}> + </button>
  
      </td>

      <td>{(quantity * details.price).toFixed(2)} $</td>
      <td>
        <button type="button" className="btn btn-danger remove" 
        style={{borderRadius: "50%"}}
        onClick={()=> remove(id)}

        >
        X
        </button>
      </td>
    
    </tr>
  );
}
