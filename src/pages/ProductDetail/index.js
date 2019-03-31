import React, { Component } from 'react';


// HW to fetch all products

export class ProductDetail extends Component {
  state = {}

  render(){
    const { match } = this.props
    return (
      <div>
      <h1>Product Detail: {match.params.productId}</h1>
      </div>
    )
  }
}
