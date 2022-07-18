import React from 'react';
import { List } from '../../components/Index';
import SideMenu from '../../components/SideMenu';


export default function Home({loadCategory, category, filtering, filter,Listes, updateCart}) {

  console.log(Listes.flat());
  const donne = Listes.flat()
  console.log('donne', donne[0]);
  return (
    <div className="container">
          <div className="row">
              <div className="col-sm-2">
                <SideMenu loadCategory={loadCategory} category={category}/>
              </div>
              <div className="col-sm">
                <div className="row">
                  <List data={filtering ? filter : Listes[category]} updateCart={updateCart} />
                
                </div>
              </div>
          </div>
        </div>
  );
}
