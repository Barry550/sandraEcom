import React, { Component } from 'react';
import "./Modal.css"

const Modal = (props) =>{
  return(
    <div className="Modal"
    style={{
      transform: props.visible ? 'translateY(0vh)' : 'translate(-100vh)',
      opacity: props.visible ? "1" : "0"
    }}
    >
      <button onClick={props.cache}>X</button>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae perspiciatis architecto quam. Laborum magni obcaecati tempore nisi modi ut, explicabo optio fugiat deleniti voluptatibus quo tempora sunt ipsam? Consectetur!</p>
    </div>
  )
}

export default Modal;

