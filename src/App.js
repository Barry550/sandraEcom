import React, { Fragment ,useState} from 'react';
import {Navbar} from './ressource/components/Index';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Listes} from "./Data"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Cart from './ressource/views/Cart';
import Home from './ressource/views/Components/Home';
import Checkout from './ressource/views/Components/Checkout';
import UserProfileContextProvider from './Lib/UserProfileContext';
import Confirm from "./ressource/views/Components/Confirm"


const App = ({items, saveLocalStorage}) =>{

const [category, setCategory] = useState(0)

const [filtering, setFiltering] = useState(false)

const [filter, setFilter] = useState(false)


const ResultFilter = input => {
  let fullList = Listes.flat()
  console.log(fullList);
  
  const result = fullList.filter(item =>{
    const name = item.name.toLowerCase()
    const term = input.toLowerCase()
    return name.indexOf(term) !== -1
  })
  setFilter(result);
}
 
// useEffect(()=>{
//   saveLocalStorage(items)
//  const fetchData = async () =>{
//   const res = await Axios.get(`http://localhost:8000/api`)
//   console.log(res);
//  }
//  fetchData()
// },[items])

const loadCategory = i => setCategory(i)

      return(
        <Fragment>
          
          <Router>
              <UserProfileContextProvider>
              <Navbar filter={ResultFilter} setFiltering={setFiltering} />
              <Route exact path="/" component={()=> <Home 
                                                          loadCategory={loadCategory}
                                                          category={category} 
                                                          filtering={filtering}
                                                          filter={filter}
                                                          Listes={Listes}          
                                                  />} 
              />
            <Route path="/Cart" component={Cart}/>
            <Route path="/checkout" component={Checkout}/> 
            <Route path="/confirm" component={Confirm}/>
            </UserProfileContextProvider>

          </Router>

        </Fragment>)
    
 

 
 
}

export default App;


