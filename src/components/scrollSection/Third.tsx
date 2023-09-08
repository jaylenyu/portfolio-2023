import React, { FC } from 'react';
import { ScrollPage, batch, Sticky, MoveIn, Fade } from 'react-scroll-motion';
import AboutMe from '../contact/AboutMe';
import AboutMeInfo from '../contact/AboutMeInfo';
import { AnimatorBox } from '../Styles';
import { styled } from 'styled-components';
import { ShowFadeProps } from '../../types/components';

const Third: FC<ShowFadeProps> = ({ showFade }) => {
  return (
    <ScrollPage>
      {showFade ? (
        <AboutMeContainer>
          <AnimatorBox animation={batch(Sticky(30), MoveIn(-1000, 0))}>
            <AboutMe />
          </AnimatorBox>
          <AnimatorBox animation={batch(Sticky(70), MoveIn(1000, 0))}>
            <AboutMeInfo />
          </AnimatorBox>
        </AboutMeContainer>
      ) : (
        <AboutMeContainer>
          <AnimatorBox animation={batch(Sticky(30), MoveIn(0, 0), Fade())}>
            <AboutMe />
          </AnimatorBox>
          <AnimatorBox animation={batch(Sticky(70), MoveIn(0, 0), Fade())}>
            <AboutMeInfo />
          </AnimatorBox>
        </AboutMeContainer>
      )}
    </ScrollPage>
  );
};

export default Third;

const AboutMeContainer = styled.div`
  ${({ theme }) => theme.flexBox('center', 'center', undefined)};
  height: 100%;
`;
