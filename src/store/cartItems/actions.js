export const ADD_PRODUCT = 'cart/ADD_PRODUCT';

export const addProduct = productId => ({
  type: ADD_PRODUCT,
  payload: productId,
});