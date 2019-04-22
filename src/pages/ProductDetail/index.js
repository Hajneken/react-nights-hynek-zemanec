import React from 'react';
import { Link } from 'react-router-dom';

import { getProductById } from '../../api/get-single-product';

import {
  ImgWrapper,
  Img,
  DetailsWrapper,
  Price,
  Description,
  Wrapper,
} from './styled';
import Loader from '../../components/Loader';
import { H1 } from '../../components/Typography';

class ProductDetail extends React.Component {
  state = {
    product: null,
  };

  // ⬇ experimental syntax,
  // no need to call bind(this) in constructor 🎉
  fetchProduct = async productId => {
    this.setState({ isLoading: true });
    // fetching product
    const product = await getProductById(productId);
    // when I get the product, I no longer need loading nor have null
    this.setState({ isLoading: false, product });
  };

  componentDidMount() {
    // this.props.match.params matches routing
    const { productId } = this.props.match.params;
    this.fetchProduct(productId);
  }

  componentDidUpdate(prevProps) {
    const { productId } = this.props.match.params;
    if (prevProps.match.params.productId !== productId) {
      this.fetchProduct(productId);
    }
  }

  render() {
    const { isLoading, product } = this.state;

    return (
      <Wrapper>
        {isLoading && <Loader />}
        {product && (
          <>
            <ImgWrapper>
              <Img src={product.data.attributes.image_url} />
            </ImgWrapper>
            <DetailsWrapper>
              <H1 textAlign="center">{product.data.attributes.name}</H1>
              <Price>{product.included[0].attributes.formatted_amount}</Price>
              <Description> {product.data.attributes.description}</Description>
              <Link to="/">Back</Link>
            </DetailsWrapper>
          </>
        )}
      </Wrapper>
    );
  }
}

export { ProductDetail };
