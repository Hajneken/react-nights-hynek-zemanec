import React from 'react';
import {
  Wrapper,
  ImgWrapper,
  Img,
  TitleWrapper,
  Title,
  Price,
  Link,
  AddButton,
} from './styled';

const Product = ({ node, onAddToCart }) => (
  <Wrapper>
    <Link to={node.id}>
      <ImgWrapper>
        <Img src={node.image_url} alt={`${node.name} image`} />
      </ImgWrapper>
      <TitleWrapper>
        <Title>{node.name}</Title>
      </TitleWrapper>
      <Price>{node.price.formatted_amount}</Price>
      <AddButton onClick={evt => onAddToCart(node.id, evt)}>
        Add to Cart
      </AddButton>
    </Link>
  </Wrapper>
);

export default Product;
