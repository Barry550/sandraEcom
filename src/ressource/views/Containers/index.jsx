import {connect} from "react-redux"
import App from "../../../App"
import { saveCart } from "../../../Lib/actions"


export const AppContainer = connect(
  function mapStateToProps(state){
    return { items: state.items }
  },

  function mapDispatchToProps(dispatch){
    return {
        saveLocalStorage: items => dispatch(saveCart(items))
      // onAddToCart: (item, quantity)=> dispatch(addToCart(item,quantity)),
      // onUpdateCart: (item, quantity)=> dispatch(updateCart(item,quantity))
    }
  }

)(App)




  

