import styled from 'styled-components/macro';
import { Link as BaseLink } from 'react-router-dom';
import theme from '../../../global/theme';

export const Wrapper = styled.li`
  display: flex;
  -webkit-box-shadow: 0px 0px 61px -27px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 61px -27px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 61px -27px rgba(0, 0, 0, 0.75);
  padding: 4rem;
  margin: 0 2rem 6rem 0;
  /* border: 1px solid #fff; */
`;

export const Link = styled(BaseLink)`
  width: 100%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
`;

export const ImgWrapper = styled.div`
  height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Price = styled.div`
  color: ${theme.color.red};
  font-size: 2.4rem;
  text-align: center;
`;

export const Img = styled.img`
  height: 15rem;
  width: auto;
  border: 1px solid black;
  transition: 0.5s all ease-in-out;
  &:hover {
    transform: scale(1.09);
    transition: 0.5s all ease-in-out;
  }
`;

export const TitleWrapper = styled.div`
  height: 6.7rem;
  overflow: hidden;
  text-decoration: none;
`;

export const Title = styled.h3`
  text-decoration: none;
  max-width: 30rem;
  font-size: 2rem;
  font-weight: 100;
  text-transform: capitalize;
  text-align: center;
`;

export const AddButton = styled.button`
  text-decoration: none;
  font-size: 2.5rem;
  background: #911717;
  border: none;
  border-radius: 7px;
  box-shadow: 0 5px #490101;
  color: white;
  transition: 0.5s all ease-in-out;
  &:hover {
    transform: scale(0.9);
    transition: 0.5s all ease-in-out;
  }
`;
