import React, { Component } from 'react';
import { connect } from 'react-redux';

import { H1 } from '../../components/Typography/H1';

import { getProducts } from '../../api/get-products';

import { loadProducts } from '../../store/products/actions';
import { addProduct } from '../../store/cartItems/actions';
import Loader from '../../components/Loader';
import { ProductsWrapper } from './styled';
import Layout from '../../components/Layout';
import Product from './Product';

class Products extends Component {
  state = {
    isLoading: true,
  };

  async componentDidMount() {
    // if there are no products fetch them and load them to props
    if (this.props.products.length === 0) {
      const products = await getProducts();
      this.props.loadProducts(products);
    }

    this.setState({ isLoading: false });
  }

  handleAddToCart = (productId, evt) => {
    evt.preventDefault();
    this.props.addProduct(productId);
  };

  render() {
    return (
      <Layout>
        <H1 textAlign="center">
          Very beautiful E-commerce App{' '}
          <span role="img" aria-label="briefcase">
            💼
          </span>
        </H1>
        {this.state.isLoading && <Loader />}
        <ProductsWrapper>
          {this.props.products.map(product => (
            <Product
              key={product.id}
              node={product}
              onAddToCart={this.handleAddToCart}
            />
          ))}
        </ProductsWrapper>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = {
  loadProducts,
  addProduct,
};

const ProductList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

export { ProductList };
