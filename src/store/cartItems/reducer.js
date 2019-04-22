import { ADD_PRODUCT } from './actions';

// explanation:
// action type, if add product to cart => update the shape of
// our cart property

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1,
      };
    default:
      return state;
  }
};

export default reducer;
