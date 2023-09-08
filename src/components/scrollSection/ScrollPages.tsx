import React, { FC } from 'react';
import { ScrollPage, Animator, Sticky } from 'react-scroll-motion';

type ScrollPagesHeightProps = {
  height: boolean;
};

const ScrollPages: FC<ScrollPagesHeightProps> = ({ height }) => {
  return (
    <>
      {height ? (
        <ScrollPage style={{ height: '50vh' }}>
          <Animator animation={Sticky()}>
            <span />
          </Animator>
        </ScrollPage>
      ) : (
        <ScrollPage>
          <Animator animation={Sticky()}>
            <span />
          </Animator>
        </ScrollPage>
      )}
    </>
  );
};

export default ScrollPages;
