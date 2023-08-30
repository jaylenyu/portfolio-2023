import React, { FC } from 'react';
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  Sticky,
  Fade
} from 'react-scroll-motion';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';

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
      <Third />
      <div style={{ height: '30rem' }}>
        <ScrollPage>
          <Animator animation={Sticky()}>
            <span />
          </Animator>
        </ScrollPage>
      </div>
      <Fourth />
    </ScrollContainer>
  );
};

export default ScrollComponent;
