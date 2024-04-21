import { applyMiddleware, combineReducers, createStore } from "redux";
import productReducer from "./reducers/productReducer";
import baskerReducer from "./reducers/basketReducer";

import { thunk } from "redux-thunk";
import restaurantReducer from "./reducers/restaurantReducer";

const rootReducer = combineReducers({
  products: productReducer,
  cart: baskerReducer,
  restaurants: restaurantReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
