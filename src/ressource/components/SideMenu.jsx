import React from 'react';
import "./index.css"

export default function SideMenu({loadCategory,category}) {

  const List =  ["fruis", "legumes", "produit Frais","Epicerie", "Boisson"]



  return (
    <ul className="h5 list-group">
      
      {List.map((items,index) => <li className={category === index && 'text-info font-weight-bold'} style={{listStyleType: "none", cursor: "pointer"}} key={index} onClick={()=> loadCategory(index)}>
        {items}
      </li>)}
    </ul>
  );
}
