import React, { FC } from 'react';
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  Sticky
} from 'react-scroll-motion';
import First from '../pages/First';
import Second from '../pages/Second';
import Third from '../pages/Third';
import Portfolio from './Portfolio';

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
    </ScrollContainer>
  );
};

export default ScrollComponent;
