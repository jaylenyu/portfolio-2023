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

interface ScrollComponentProps {
  homeRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
  skillRef: React.RefObject<HTMLDivElement>;
  potentialRef: React.RefObject<HTMLDivElement>;
}

const ScrollComponent: FC<ScrollComponentProps> = ({
  homeRef,
  contactRef,
  projectRef,
  experienceRef,
  skillRef,
  potentialRef
}) => {
  return (
    <ScrollContainer>
      <First ref={homeRef} />
      <ScrollPage>
        <Animator animation={Sticky()}>
          <span />
        </Animator>
      </ScrollPage>
      <Second />
      <div ref={contactRef}>
        <Third showFade={true} />
      </div>
      <Third showFade={false} />
      <div style={{ height: '30rem' }}>
        <ScrollPage>
          <Animator animation={Sticky()}>
            <span />
          </Animator>
        </ScrollPage>
      </div>
      <div ref={projectRef}>
        <Portfolio />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={skillRef}>
        <Skill />
      </div>
      <div ref={potentialRef}>
        <Potentail />
      </div>
    </ScrollContainer>
  );
};

export default ScrollComponent;
