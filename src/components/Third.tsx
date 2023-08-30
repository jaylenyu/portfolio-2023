import React, { FC } from 'react';
import {
  ScrollPage,
  Animator,
  batch,
  Sticky,
  MoveIn,
  Fade
} from 'react-scroll-motion';
import AboutMe from './AboutMe';
import AboutMeInfo from './AboutMeInfo';
import { styled } from 'styled-components';

const Third: FC = () => {
  return (
    <ScrollPage>
      <AboutMeContainer>
        <Animator animation={batch(Sticky(30), MoveIn(-1000, 0), Fade())}>
          <AboutMe />
        </Animator>
        <Animator animation={batch(Sticky(60), MoveIn(1000, 0), Fade())}>
          <AboutMeInfo />
        </Animator>
      </AboutMeContainer>
    </ScrollPage>
  );
};

export default Third;

const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
