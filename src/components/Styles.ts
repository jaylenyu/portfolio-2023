import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CustomLink = styled(Link)`
  padding-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

export const CustomWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 100px;
  margin-bottom: 20rem;
  height: 100%;

  @media screen and ${({ theme }) => theme.tablet} {
    padding: 0px 50px;
  }

  @media screen and ${({ theme }) => theme.mobile} {
    padding: 0px 10px;
  }
`;

export const CustomTitle = styled.div`
  font-size: 5rem;
  color: #333;
  margin-bottom: 10rem;

  @media screen and ${({ theme }) => theme.tablet} {
    font-size: 4rem;
    margin-bottom: 5rem;
  }

  @media screen and ${({ theme }) => theme.mobile} {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
`;

export const SectionWrap = styled.section`
  padding: 50px;
  background-color: #fafafa;
  width: inherit;
  height: 100%;
  margin-bottom: 3rem;
  border-radius: 1rem;

  @media screen and ${({ theme }) => theme.tablet} {
    width: auto;
    height: auto;
  }
`;

export const CustomArticle = styled.article`
  color: ${({ theme }) => theme.gray};
  font-size: 1rem;
  padding: 0.5rem 0;
`;
