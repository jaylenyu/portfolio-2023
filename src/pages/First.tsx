import React, { FC } from 'react';
import { ScrollPage, Animator, batch, Fade, Sticky } from 'react-scroll-motion';

const First: FC = () => {
  return (
    <ScrollPage>
      <Animator animation={batch(Sticky(), Fade())}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '5rem',
            lineHeight: '10rem'
          }}
        >
          안녕하세요 !
        </div>
        <div style={{ fontSize: '3rem' }}>프론트엔드 개발자 유정인입니다.</div>
      </Animator>
    </ScrollPage>
  );
};

export default First;
