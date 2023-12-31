import React, { forwardRef } from 'react';
import { styled } from 'styled-components';
import {
  CustomTitle,
  CustomWrap,
  SectionWrap,
  CustomArticle,
  CustomLink
} from './Styles';
import { useExperienceData } from '../hooks/useExperienceData';

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
  const { error, isLoading, experienceData } = useExperienceData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <CustomWrap ref={ref}>
      <CustomTitle>Experience</CustomTitle>
      {experienceData.map(
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
                <div>
                  <ExperienceTitle>{title}</ExperienceTitle>
                  <CustomArticle>{part}</CustomArticle>
                  <DateText>{date}</DateText>
                  <CustomArticle>{detail}</CustomArticle>
                </div>
                <ArticleWrap>
                  <ArticleTitle>{subTitle}</ArticleTitle>
                  {subDetail.map(el => (
                    <CustomArticle key={el}>{el}</CustomArticle>
                  ))}
                  <ArticleUL>
                    {subDetailList?.map(el => (
                      <li key={el}>{el}</li>
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
});

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

  @media screen and ${({ theme }) => theme.mobile} {
    margin: 1rem 0;

    img {
      width: 10rem;
    }
  }
`;

const ExperienceGruop = styled.div`
  padding-left: 6rem;
  line-height: 2rem;

  @media screen and ${({ theme }) => theme.tablet} {
    padding: 0 2rem;
  }
  @media screen and ${({ theme }) => theme.tablet} {
    padding: 0 10px;
  }
`;

const ExperienceTitle = styled.div`
  font-size: 2rem;

  @media screen and ${({ theme }) => theme.tablet} {
    font-size: 1.5rem;
  }
`;

const DateText = styled.div`
  color: ${({ theme }) => theme.lightGray};
  font-style: italic;
  @media screen and ${({ theme }) => theme.tablet} {
    font-size: 0.8rem;
  }
`;

const ArticleWrap = styled.div`
  padding: 3rem 0;

  @media screen and ${({ theme }) => theme.mobile} {
    padding: 1rem 0;
  }
`;

const ArticleTitle = styled.span`
  font-size: 1.2rem;

  @media screen and ${({ theme }) => theme.tablet} {
    font-size: 1rem;
  }
  @media screen and ${({ theme }) => theme.mobile} {
    font-size: 0.8rem;
  }
`;

const ArticleUL = styled.ul`
  padding: 0 2rem;

  @media screen and ${({ theme }) => theme.mobile} {
    margin-top: 1rem;
    li {
      font-size: 0.6rem;
      line-height: 1.2rem;
    }
  }
`;
