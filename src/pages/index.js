import React, { Component } from 'react'

 import ProductListComponent from '../components/List/index'
// import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import { H1 } from '../components/Typography/index'

 import { getProducts } from '../api/get-products'

 class ProductList extends Component {
  state = {
    isLoading: true,
    products: [],
  }

   async componentDidMount() {
    let products = await getProducts()

     this.setState({
      isLoading: false,
      products,
    })
  }

   render() {
    const { isLoading, products } = this.state

     return (
      <Layout>
        <H1 textAlign="center">E-Commerce app</H1>
        {isLoading && <Loader />}
        {products && <ProductListComponent products={products} />}
      </Layout>
    )
  }
}

 export { ProductList }
