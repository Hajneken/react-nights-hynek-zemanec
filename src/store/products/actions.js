//folders represent models
//  action for loading of the products

export const LOAD_PRODUCTS = 'products/LOAD_PRODUCTS';

export const loadProducts = products => ({
  // creates a new action with type and the payload
  type: 'LOAD_PRODUCTS',
  payload: products,
});
