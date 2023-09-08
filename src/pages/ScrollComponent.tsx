import React, { FC } from 'react';
import { ScrollContainer } from 'react-scroll-motion';
import { ScrollComponentProps } from '../types/components';
import ScrollPages from '../components/scrollSection/ScrollPages';
import First from '../components/scrollSection/First';
import Second from '../components/scrollSection/Second';
import Third from '../components/scrollSection/Third';
import Portfolio from '../components/Portfolio';
import Experience from '../components/Experience';
import Skill from '../components/Skill';
import Potentail from '../components/Potential';

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
      <ScrollPages height={false} />
      <Second />
      <div ref={contactRef}>
        <Third showFade={true} />
      </div>
      <Third showFade={false} />
      <ScrollPages height={true} />
      <Portfolio ref={projectRef} />
      <Experience ref={experienceRef} />
      <Skill ref={skillRef} />
      <Potentail ref={potentialRef} />
    </ScrollContainer>
  );
};

export default ScrollComponent;
