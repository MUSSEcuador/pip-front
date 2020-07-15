import {action, thunk} from "easy-peasy";
import axios from "axios";

export default{
    allProductos: [],
    productosHasErrors: false,
    //Thunk

    getAllProductos: thunk(async (actions) => {
        axios
          .get("http://localhost:1337/prod-fincas")
          .then((prod) => {
            actions.setAllProductos(prod.data);
          })
          .catch((err) => {
            console.log(err);
            actions.setProductosHasErrors(true);
          });
      }),
    //Action
    setAllProductos: action((state, data) => {
        state.allProductos = data;
      }),
      setProductosHasErrors: action((state, data) => {
        state.productosHasErrors = data;
      }),
}