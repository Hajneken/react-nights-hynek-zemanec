import React, {Component} from 'react';
import {getProducts} from '../../api/get-products'
import Loader from '../../components/Loader';
// Exported as default, therefore can be named as anything
import ProductListComponent from '../../components/ProductList'

import {H1} from '../../components/Typography'


class ProductList extends Component{

  state = {
    isLoading: true,
    products: [],
  }

  async componentDidMount(){
    let products = await getProducts();

    this.setState({
      isLoading: false,
      products,
    })
  }

  render(){
    const {isLoading, products} = this.state;

    return(
      <>
        <H1 textAlign="center">Very beautiful E-commerce App <span role="img" aria-label="briefcase">💼</span></H1>
        {isLoading && <Loader/>}
        {/* ProductList component 🤘😎 */}
        {!isLoading && <ProductListComponent products={products}/>}
      </>
    )
  }

}

export {ProductList}
