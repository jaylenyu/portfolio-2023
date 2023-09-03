import React, { FC } from 'react';
import { styled } from 'styled-components';

const Fourth: FC = () => {
  return (
    <FourthWrap>
      <FourthTitle>Projects</FourthTitle>
      <ProjectContainer>
        {PROJECT_DETAIL.map(
          ({ id, name, img, title, date, skill, contents }) => (
            <ProjectWrap key={id}>
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
                        <SkillCard>{el}</SkillCard>
                      ))}
                    </SkillBox>
                    <WorkList>
                      구현 내용
                      {contents.map(el => (
                        <li>{el}</li>
                      ))}
                    </WorkList>
                  </div>
                  <ButtonBox>
                    <Button>자세히 보기</Button>
                  </ButtonBox>
                </ProjectInfo>
              </ProjectContents>
            </ProjectWrap>
          )
        )}
      </ProjectContainer>
    </FourthWrap>
  );
};

export default Fourth;

const FourthWrap = styled.div`
  ${({ theme }) => theme.flexBox(undefined, undefined, 'column')};
  padding: 0px 100px;
  margin-bottom: 10rem;
  border-bottom: 1px solid black;
  height: 100%;

  @media screen and ${({ theme }) => theme.tablet} {
    padding: 0px 50px;
    margin-bottom: 5rem;
  }

  @media screen and ${({ theme }) => theme.mobile} {
    padding: 0px 10px;
    margin-bottom: 1rem;
    padding: 0px 10px;
  }
`;

const FourthTitle = styled.div`
  font-size: 5rem;
  color: #333;
  margin-bottom: 10rem;

  @media screen and ${({ theme }) => theme.tablet} {
    font-size: 4rem;
    margin-bottom: 5rem;
  }

  @media screen and ${({ theme }) => theme.mobile} {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

const ProjectContainer = styled.div`
  height: 100%;
`;

const ProjectWrap = styled.div`
  padding: 50px;
  background-color: #fafafa;
  width: inherit;
  height: 100%;
  margin-bottom: 3rem;

  @media screen and ${({ theme }) => theme.tablet} {
    width: auto;
    height: auto;
  }
`;

const ProjectTitle = styled.div`
  ${({ theme }) => theme.flexBox('center', undefined, undefined)};
  color: ${({ theme }) => theme.gray};
  font-size: 3rem;
  margin-bottom: 5rem;

  @media screen and ${({ theme }) => theme.tablet} {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  @media screen and ${({ theme }) => theme.mobile} {
    margin-bottom: 1rem;
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
  color: #fafafa;
  display: inline-block;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.lightGray};
  border-radius: 5px;
  margin: 0 5px 5px 0;
  font-size: 1rem;
  box-sizing: border-box;
`;

const ButtonBox = styled.div`
  width: 80%;
  height: 3rem;
  border-radius: 1rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Button = styled.button`
  color: ${({ theme }) => theme.lightGray};
  width: inherit;
  height: inherit;
  font-size: 1.2rem;
  &:hover {
  }
`;

const PROJECT_DETAIL = [
  {
    id: 1,
    name: 'RunBase',
    img: '/images/runbase.png',
    title: 'Frontend Developer | ',
    date: '2023.08.01 ~ 개발중',
    skill: ['JavaScript', 'TypeScript', 'React', 'Styled-Components'],
    contents: ['컴포넌트 재사용성을 고려한 배송지 레이아웃 구성']
  },
  {
    id: 2,
    name: 'Wevre',
    img: '/images/Wevre.png',
    title: 'Frontend Developer | ',
    date: '2023.03.02 ~ 2023.04.05',
    skill: ['HTML', 'CSS', 'JavaScript', 'React', 'Styled-Components'],
    contents: [
      '배송지를 편리하게 입력할 수 있도록 카카오주소 API를 구현',
      '결제를 쉽고 간편하게 할 수 있도록 카카오QR페이 API를 구현',
      '미술품을 이미지와 함께 등록할 수 있도록 작품등록 페이지 구현'
    ]
  },
  {
    id: 3,
    name: 'sip-scent',
    img: '/images/sipscent.png',
    title: 'Frontend Developer | ',
    date: '2023.03.06 ~ 2023.03.17',
    skill: ['HTML', 'CSS', 'JavaScript', 'React', 'Sass'],
    contents: [
      '이미지와 함께 카테고리를 선택할 수 있도록 카테고리로 연결된 캐러셀 구현',
      '제품을 보다 쉽게 접근할 수 있도록 필터기능 구현',
      '주문페이지 입력정보 간소화 및 사용자의 시선을 고려한 UI설정'
    ]
  }
];
