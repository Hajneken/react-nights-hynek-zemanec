import styled from 'styled-components'
import theme from '../../global/theme'

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
`

export const ImgWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`

export const Img = styled.img`
  height: 400px;
`

export const DetailsWrapper = styled.div`
  flex: 1;
  max-width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.softGray};
  padding: 0 3rem;
  flex-direction: column;
`

export const Price = styled.span`
  font-size: 2.4rem;
  color: ${theme.color.red};
`

export const Description = styled.span`
  margin: 2rem 0;
  text-align: center;
`

export const TitleWrap = styled.div`
  height: 6.7rem;
  overflow: hidden;
`

export const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 100;
  text-transform: uppercase;
`
