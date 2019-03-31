
import React, { Component } from 'react'

// HW to fetch Product Details

export class ProductDetail extends Component {
  state = {
    
  }
  render() {
    const { match } = this.props
    return (
      <div>
        <h1>Product detail: {match.params.productId}</h1>
      </div>
    )
  }
}
