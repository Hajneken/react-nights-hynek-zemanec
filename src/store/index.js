import { createStore, combineReducers } from 'redux';

import products from './products/reducer';
import cartItems from './cartItems/reducer'

// top level root reducer, combines all previous reducers
const reducer = combineReducers(
  {products,
    cartItems
  }
)
// fully cofigured store 
const store = createStore(reducer);

export default store;

