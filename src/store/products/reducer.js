import {LOAD_PRODUCTS} from './action';

const reducer = (state=[], action) =>{
  switch(action.type){
    case LOAD_PRODUCTS:
    return(action.payload)
    default:
    return state
  }
}

export default reducer;
