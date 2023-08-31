import React, { FC, useEffect, useState } from 'react';
import Axios from 'axios';
import { ProjectDataProps } from '../types/components';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { CustomTitle, CustomWrap, SectionWrap } from './Styles';

const Portfolio: FC = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const dataURL = '/data/ProjectList.json';
    Axios.get(dataURL)
      .then(res => {
        setProjectData(res.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const projectList = projectData as ProjectDataProps[];

  return (
    <CustomWrap>
      <CustomTitle>Projects</CustomTitle>
      {projectList.map(
        ({ id, name, img, title, date, skill, contents, url }) => (
          <SectionWrap key={id}>
            <ProjectTitle>{name}</ProjectTitle>
            <ProjectContents>
              <ProjectImageBox>
                <img src={img} alt="project" />
              </ProjectImageBox>
              <ProjectInfo>
                <div>
                  <span>{title}</span>
                  <ProjectText>{date}</ProjectText>
                  <SkillBox>
                    {skill.map(el => (
                      <SkillCard key={el}>{el}</SkillCard>
                    ))}
                  </SkillBox>
                  <WorkList>
                    구현 내용
                    {contents.map(el => (
                      <li key={el}>{el}</li>
                    ))}
                  </WorkList>
                </div>
                <GithubLink to={url}>
                  <Button>
                    <ButtonImageBox>
                      <img src="/images/github-mark.png" alt="github icon" />
                    </ButtonImageBox>
                    <div>자세히보기</div>
                  </Button>
                </GithubLink>
              </ProjectInfo>
            </ProjectContents>
          </SectionWrap>
        )
      )}
    </CustomWrap>
  );
};

export default Portfolio;

const ProjectTitle = styled.div`
  ${({ theme }) => theme.flexBox('center', undefined, undefined)};
  color: ${({ theme }) => theme.gray};
  font-size: 3rem;
  margin-bottom: 5rem;

  @media screen and ${({ theme }) => theme.tablet} {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media screen and ${({ theme }) => theme.mobile} {
    margin-bottom: 3rem;
  }
`;

const ProjectContents = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  @media screen and ${({ theme }) => theme.tablet} {
    ${({ theme }) => theme.flexBox(undefined, 'center', 'column')};
    height: 100%;
    width: 100%;
  }
`;

const ProjectImageBox = styled.div`
  height: 100%;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
  }

  @media screen and ${({ theme }) => theme.tablet} {
    height: auto;
    width: auto;
  }
`;

const ProjectInfo = styled.div`
  ${({ theme }) => theme.flexBox('space-between', undefined, 'column')};
  height: auto;
  width: 50%;
  letter-spacing: 1px;
  line-height: 1.8rem;
  margin-left: 3rem;

  @media screen and ${({ theme }) => theme.tablet} {
    height: 100%;
    width: 100%;
    align-items: center;
    margin-top: 3rem;
    margin-left: 0;
  }

  @media screen and ${({ theme }) => theme.mobile} {
    margin-top: 2rem;
    width: 100%;
  }
`;

const ProjectText = styled.span`
  color: ${({ theme }) => theme.lightGray};
`;

const WorkList = styled.ul`
  margin-bottom: 3rem;
  list-style: none;
  li {
    font-size: 14px;
    color: ${({ theme }) => theme.lightGray};
  }
`;

const SkillBox = styled.div`
  margin-bottom: 3rem;
`;

const SkillCard = styled.span`
  display: inline-block;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.lightGray};
  border-radius: 5px;
  margin: 0 5px 5px 0;
  font-size: 1rem;
  color: #fafafa;
  box-sizing: border-box;
`;

const GithubLink = styled(Link)`
  display: flex;
  height: 3rem;
  width: 100%;
  border-radius: 1rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media screen and ${({ theme }) => theme.tablet} {
    width: 80%;
  }

  @media screen and ${({ theme }) => theme.mobile} {
    width: 100%;
  }
`;

export const ButtonImageBox = styled.div`
  display: flex;
  height: 2rem;
  width: 2rem;
  margin-right: 1rem;

  img {
    height: 100%;
    width: 100%;
  }

  @media screen and ${({ theme }) => theme.tablet} {
    height: 2rem;
    width: 2rem;
  }
`;

const Button = styled.button`
  ${({ theme }) => theme.flexBox('center', 'center', undefined)};
  color: ${({ theme }) => theme.lightGray};
  width: inherit;
  height: inherit;
  font-size: 1.2rem;
  &:hover {
  }

  @media screen and ${({ theme }) => theme.tablet} {
    width: 100%;
  }

  @media screen and ${({ theme }) => theme.mobile} {
    font-size: 1rem;
  }
`;
