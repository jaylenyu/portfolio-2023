import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Animator } from 'react-scroll-motion';

export const CustomLink = styled(Link)`
  padding-left: 5px;
  &:hover {
    text-decoration: underline;
  }
  @media screen and ${({ theme }) => theme.mobile} {
    font-size: 0.8rem;
  }
`;

export const CustomWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 100px;
  margin-top: 5rem;
  padding-top: 5rem;
  height: 100%;

  @media screen and ${({ theme }) => theme.tablet} {
    margin-top: 5rem;
    padding: 5rem 50px 0 50px;
  }

  @media screen and ${({ theme }) => theme.mobile} {
    margin-top: 5rem;
    padding-top: 3rem;
    padding: 20px 10px;
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
    margin-bottom: 2rem;
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
  @media screen and ${({ theme }) => theme.mobile} {
    width: auto;
    height: auto;
    padding: 10px;
  }
`;

export const CustomArticle = styled.article`
  color: ${({ theme }) => theme.gray};
  font-size: 1rem;
  padding: 0.5rem 0;

  @media screen and ${({ theme }) => theme.mobile} {
    font-size: 0.8rem;
    line-height: 1.2rem;
    padding: 0;
  }
`;

export const AnimatorBox = styled(Animator)`
  ${({ theme }) => theme.flexBox('center', 'center', 'column')};
  width: 100%;
  padding: 0 10px;
`;
