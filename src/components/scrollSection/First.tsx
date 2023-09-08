import React, { forwardRef } from 'react';
import { ScrollPage, batch, Fade, Sticky } from 'react-scroll-motion';
import { AnimatorBox } from '../Styles';
import { styled } from 'styled-components';

const First = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <ScrollPage>
        <AnimatorBox animation={batch(Sticky(), Fade())}>
          <FirstTitle>안녕하세요 !</FirstTitle>
          <FirstText>프론트엔드 개발자 유정인입니다.</FirstText>
        </AnimatorBox>
      </ScrollPage>
    </div>
  );
});

export default First;

const FirstTitle = styled.h3`
  ${({ theme }) => theme.flexBox('center', undefined, undefined)};
  margin-bottom: 3rem;
  font-size: 5rem;
  line-height: 10rem;

  @media screen and ${({ theme }) => theme.tablet} {
    font-size: 3rem;
  }

  @media screen and ${({ theme }) => theme.mobile} {
    font-size: 2rem;
  }
`;

const FirstText = styled.h4`
  font-size: 3rem;

  @media screen and ${({ theme }) => theme.tablet} {
    font-size: 2rem;
  }

  @media screen and ${({ theme }) => theme.mobile} {
    font-size: 1.2rem;
  }
`;
