import React from 'react';
import {
  Wrapper,
  Link,
  ImgWrapper,
  Img,
  Price,
  TitleWrap,
  Title
} from './styled'

const Product = ({ node }) => (
  <Wrapper>
    <Link to={node.id}>
      <ImgWrapper>
        <Img src={node.image_url} alt={`${node.name} image`} />
      </ImgWrapper>
      <TitleWrap>
        <Title>{node.name}</Title>
      </TitleWrap>
      <Price>{node.price.formatted_amount}</Price>
    </Link>
  </Wrapper>
)

export default Product;
