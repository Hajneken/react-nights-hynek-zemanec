import React, { Component, Fragment } from 'react';
import { Header, Wrapper, StyledLink } from './styled';

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header>
          <StyledLink to="/">All products</StyledLink>
          <StyledLink to="/cart">My Cart</StyledLink>
        </Header>
        <Wrapper>{this.props.children}</Wrapper>
      </Fragment>
    );
  }
}

export default Layout;
