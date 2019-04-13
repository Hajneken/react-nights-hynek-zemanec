import React from 'react';
import { Wrapper, ImgWrapper, Img, TitleWrapper, Title, Price } from './styled';
import {Link} from 'react-router-dom';


const Product = ({node}) => (
  <Wrapper>
    <Link to={node.id}>
      <ImgWrapper>
        <Img src={node.image_url} alt={`${node.name} image`} />
      </ImgWrapper>
      <TitleWrapper>
        <Title>{node.name}</Title>
      </TitleWrapper>
      <Price>{node.price.formatted_amount}</Price>
    </Link>
  </Wrapper>
)

export default Product;
