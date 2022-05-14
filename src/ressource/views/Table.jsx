import React,{useEffect} from 'react';
import Row from './Row';
import {useSelector} from "react-redux"
export default function Table() {
  const items = useSelector(state => state.items)

  return (
    <table>
      <thead>
      <tr>
        <th width='200'>Produits</th>
        <th width='80'>Reference </th>
        <th width='150'> Price</th>
        <th width='250'>Quantite</th>
        <th width='200'>Total</th>
      </tr>
      </thead>

      <tbody>
        {items.map(items => {
return (<Row  items={items}/>)
        })}
      </tbody>
    </table>
  );
}
