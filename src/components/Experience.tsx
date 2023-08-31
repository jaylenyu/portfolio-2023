import React, { FC, useState, useEffect } from 'react';
import Axios from 'axios';
import { styled } from 'styled-components';
import {
  CustomTitle,
  CustomWrap,
  SectionWrap,
  CustomArticle,
  CustomLink
} from './Styles';
import { ExperienceDataProps } from '../types/components';

const Experience: FC = () => {
  const [ExperienceData, setExperienceData] = useState([]);

  useEffect(() => {
    const dataURL = '/data/ExperienceList.json';
    Axios.get(dataURL)
      .then(res => {
        setExperienceData(res.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const ExperienceList = ExperienceData as ExperienceDataProps[];

  return (
    <CustomWrap>
      <CustomTitle>Experience</CustomTitle>
      {ExperienceList.map(
        ({
          id,
          img,
          title,
          part,
          date,
          detail,
          subTitle,
          subDetail,
          subDetailList,
          url,
          urlText
        }) => (
          <SectionWrap key={id}>
            <ExperienceWrap>
              <ExperienceImageBox>
                <img src={img} alt="company" />
              </ExperienceImageBox>
              <ExperienceGruop>
                <ExperienceHeader>
                  <ExperienceTitle>{title}</ExperienceTitle>
                  <CustomArticle>{part}</CustomArticle>
                  <DateText>{date}</DateText>
                  <CustomArticle>{detail}</CustomArticle>
                </ExperienceHeader>
                <ArticleWrap>
                  <ArticleTitle>{subTitle}</ArticleTitle>
                  {subDetail.map(el => (
                    <CustomArticle>{el}</CustomArticle>
                  ))}
                  <ArticleUL>
                    {subDetailList?.map(el => (
                      <li>{el}</li>
                    ))}
                  </ArticleUL>
                </ArticleWrap>
                <CustomLink to={url}>{urlText}</CustomLink>
              </ExperienceGruop>
            </ExperienceWrap>
          </SectionWrap>
        )
      )}
    </CustomWrap>
  );
};

export default Experience;

const ExperienceWrap = styled.div`
  display: flex;
  width: inherit;

  @media screen and ${({ theme }) => theme.tablet} {
    flex-direction: column;
  }

  @media screen and ${({ theme }) => theme.mobile} {
  }
`;

const ExperienceImageBox = styled.div`
  width: 20rem;

  img {
    width: 20rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }

  @media screen and ${({ theme }) => theme.tablet} {
    ${({ theme }) => theme.flexBox('center', undefined, undefined)};
    width: 100%;
    margin-bottom: 3rem;

    img {
      width: 15rem;
    }
  }
`;

const ExperienceGruop = styled.div`
  padding-left: 6rem;
  line-height: 2rem;

  @media screen and ${({ theme }) => theme.tablet} {
    padding: 0 2rem;
  }
`;

const ExperienceTitle = styled.div`
  font-size: 2rem;

  @media screen and ${({ theme }) => theme.tablet} {
    font-size: 1.5rem;
  }
`;

const ExperienceHeader = styled.div``;

const DateText = styled.div`
  color: ${({ theme }) => theme.lightGray};
  font-style: italic;
`;

const ArticleWrap = styled.div`
  padding: 3rem 0;
`;

const ArticleTitle = styled.span`
  font-size: 1.2rem;

  @media screen and ${({ theme }) => theme.tablet} {
    font-size: 1rem;
  }
`;

const ArticleUL = styled.ul`
  padding: 0 2rem;
`;
