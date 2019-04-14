export const ADD_PRODUCT = 'cart/ADD';

export const addProduct = productId => (
  {
    type: ADD_PRODUCT,
    payload: productId,
  }
)
