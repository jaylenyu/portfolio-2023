import React, { FC } from 'react';
import { styled } from 'styled-components';
import { SkillIconType } from '../types/components';
import { CustomTitle } from './Styles';

const Skill: FC = () => {
  return (
    <SkillContainer>
      <CustomTitle>Skills</CustomTitle>
      <SkillWrap>
        <SkillIconWrap>
          {SKILL_ICON.map(({ id, img }) => (
            <SkillIcon key={id}>
              <img src={img} alt={img} />
            </SkillIcon>
          ))}
        </SkillIconWrap>
        <SkillTextWrap>
          <SkillTextBox>
            <SkillTextTitle>Etc.</SkillTextTitle>
            <SkillTextContents>Github, Vercel, Trello</SkillTextContents>
            <SkillTextTitle>Studying</SkillTextTitle>
            <SkillTextContents>
              Next.js, Tailwind CSS, Node.js
            </SkillTextContents>
          </SkillTextBox>
        </SkillTextWrap>
      </SkillWrap>
    </SkillContainer>
  );
};

export default Skill;

const SkillContainer = styled.div`
  ${({ theme }) => theme.flexBox(undefined, undefined, 'column')};
  padding: 100px;
  margin-top: 20rem;
  height: inherit;
  background-color: #fafafa;

  @media screen and ${({ theme }) => theme.tablet} {
    padding: 100px 50px;
  }

  @media screen and ${({ theme }) => theme.mobile} {
    margin-top: 5rem;
    padding: 20px;
  }
`;

const SkillWrap = styled.div`
  display: flex;
  height: 100%;
  @media screen and ${({ theme }) => theme.mobile} {
    ${({ theme }) => theme.flexBox('center', 'center', 'column')};
  }
`;

const SkillIconWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  width: 100%;

  @media screen and ${({ theme }) => theme.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and ${({ theme }) => theme.mobile} {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`;

const SkillIcon = styled.div`
  height: 10rem;
  width: 10rem;

  img {
    width: 100%;
    border-radius: 20%;
    box-shadow: 2px 2px 5px 0px;
    overflow: hidden;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media screen and ${({ theme }) => theme.tablet} {
    height: auto;
    width: auto;
  }
`;

const SkillTextWrap = styled.div`
  width: 100%;
`;

const SkillTextBox = styled.div`
  ${({ theme }) => theme.flexBox('center', 'center', 'column')};
  height: 100%;

  @media screen and ${({ theme }) => theme.tablet} {
    padding: 0 20px;
  }

  @media screen and ${({ theme }) => theme.mobile} {
    padding: 0 10px;
  }
`;

const SkillTextTitle = styled.h3`
  font-size: 2rem;
  line-height: 5rem;

  @media screen and ${({ theme }) => theme.tablet} {
    font-size: 1.5rem;
  }
`;

const SkillTextContents = styled.h4`
  font-size: 1.2rem;

  @media screen and ${({ theme }) => theme.tablet} {
    font-size: 1rem;
  }
`;

const SKILL_ICON: SkillIconType[] = [
  { id: 1, img: '/images/javascript.png' },
  { id: 2, img: '/images/typescript.png' },
  { id: 3, img: '/images/react.png' },
  { id: 4, img: '/images/sass.png' },
  { id: 5, img: '/images/styled-components.png' },
  { id: 6, img: '/images/aws.png' }
];
