import React from 'react'
import {H1} from '../Typography'
import { LoaderWrap, StyledLoader, Circular, Path } from './styled'

 const Loader = props => (
  <LoaderWrap {...props}>
    <StyledLoader>
      <Circular viewBox="25 25 50 50">
        <Path
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="4"
          strokeMiterlimit="10"
          {...props}
        />
      </Circular>
    </StyledLoader>
    <H1 textAlign="center">Are you ready fo dis?</H1>
    <H1 textAlign="center"><span role='img' aria-label="ninja kitty">🐱‍👤</span></H1>
  </LoaderWrap>
)

 export default Loader
