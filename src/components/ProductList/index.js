import React from 'react';
import {ProductsWrapper} from './styled'
import Product from './Product'

const ProductList = ({ products }) => (
  <ProductsWrapper>
    {products.map(product=>(
      <Product key={product.id} node={product} />
    ))}
  </ProductsWrapper>
)

export default ProductList
