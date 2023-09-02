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
import { ShowFadeProps } from '../types/components';

const Third: FC<ShowFadeProps> = ({ showFade }) => {
  return (
    <ScrollPage>
      {showFade ? (
        <AboutMeContainer>
          <Animator animation={batch(Sticky(30), MoveIn(-1000, 0))}>
            <AboutMe />
          </Animator>
          <Animator animation={batch(Sticky(60), MoveIn(1000, 0))}>
            <AboutMeInfo />
          </Animator>
        </AboutMeContainer>
      ) : (
        <AboutMeContainer>
          <Animator animation={batch(Sticky(30), MoveIn(0, 0), Fade())}>
            <AboutMe />
          </Animator>
          <Animator animation={batch(Sticky(60), MoveIn(0, 0), Fade())}>
            <AboutMeInfo />
          </Animator>
        </AboutMeContainer>
      )}
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