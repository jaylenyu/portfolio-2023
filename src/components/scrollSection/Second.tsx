import React, { FC } from 'react';
import { ScrollPage, batch, Fade, Sticky } from 'react-scroll-motion';
import { AnimatorBox } from '../Styles';
import { styled } from 'styled-components';

const Second: FC = () => {
  return (
    <ScrollPage>
      <AnimatorBox animation={batch(Fade(), Sticky(), Fade())}>
        <SecondTitle>Frontend Developer 유정인</SecondTitle>
        <SecondText>
          새로운 문제를 해결하며 성장하는 것에 큰 성취감을 느낍니다.
        </SecondText>
        <SecondText>늘 더 나은 방향으로 고민하는 것을 즐깁니다.</SecondText>
      </AnimatorBox>
    </ScrollPage>
  );
};

export default Second;

const SecondTitle = styled.h3`
  ${({ theme }) => theme.flexBox('center', undefined, undefined)};
  margin-bottom: 10rem;
  font-size: 3rem;

  @media screen and ${({ theme }) => theme.tablet} {
    margin-bottom: 5rem;
    font-size: 2rem;
  }

  @media screen and ${({ theme }) => theme.mobile} {
    margin-bottom: 3rem;
    font-size: 1.5rem;
  }
`;

const SecondText = styled.h4`
  ${({ theme }) => theme.flexBox('center', undefined, undefined)};
  font-size: 1.5rem;
  line-height: 2rem;

  @media screen and ${({ theme }) => theme.tablet} {
    font-size: 1.2rem;
  }

  @media screen and ${({ theme }) => theme.mobile} {
    font-size: 1rem;
    padding: 0 10px;
  }
`;
