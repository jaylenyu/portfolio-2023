import React, { FC } from 'react';
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  Sticky
} from 'react-scroll-motion';
import First from '../components/First';
import Second from '../components/Second';
import Third from '../components/Third';
import Portfolio from '../components/Portfolio';
import Experience from '../components/Experience';
import Skill from '../components/Skill';
import Potentail from '../components/Potential';

const ScrollComponent: FC = () => {
  return (
    <ScrollContainer>
      <First />
      <ScrollPage>
        <Animator animation={Sticky()}>
          <span />
        </Animator>
      </ScrollPage>
      <Second />
      <Third showFade={true} />
      <Third showFade={false} />
      <div style={{ height: '30rem' }}>
        <ScrollPage>
          <Animator animation={Sticky()}>
            <span />
          </Animator>
        </ScrollPage>
      </div>
      <Portfolio />
      <Experience />
      <Skill />
      <Potentail />
    </ScrollContainer>
  );
};

export default ScrollComponent;
