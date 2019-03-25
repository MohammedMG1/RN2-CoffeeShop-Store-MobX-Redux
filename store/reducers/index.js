import { combineReducers } from "redux";

// Reducers
import coffeeReducer from "./coffeeReducer";
import cartReducer from "./coffeeReducer";

export default combineReducers({
  coffeeReducer: coffeeReducer,
  cartReducer: cartReducer
});
