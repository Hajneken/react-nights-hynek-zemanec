import React from 'react';
import { H1 } from '../../components/Typography';
import Layout from '../../components/Layout';

import { connect } from 'react-redux';

class CartView extends React.Component {
  render() {
    return (
      <Layout>
        <H1>Your cart</H1>
        <ul>
          {this.props.items.map(item => (
            <li key={item.product.id}>
              <p>
                {item.product.name} - {item.quantity}
              </p>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  items: Object.keys(state.cartItems).map(productId => ({
    quantity: state.cartItems[productId],
    product: state.cartItems.find(p => p.id === productId),
  })),
});

const Cart = connect(mapStateToProps)(CartView);

export { Cart };
