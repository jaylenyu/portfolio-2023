import React, { FC } from 'react';
import { ScrollPage, Animator, batch, Fade, Sticky } from 'react-scroll-motion';

const Second: FC = () => {
  return (
    <ScrollPage style={{ width: '100%' }}>
      <Animator
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        animation={batch(Fade(), Sticky(), Fade())}
      >
        <div style={{ fontSize: '3rem', lineHeight: '8rem' }}>
          Frontend Developer 유정인
        </div>
        <div style={{ fontSize: '1.5rem', lineHeight: '3rem' }}>
          새로운 문제를 해결하며 성장하는 것에 큰 성취감을 느낍니다.
        </div>
        <div style={{ fontSize: '1.5rem', lineHeight: '3rem' }}>
          사용자 경험을 중요시하고 늘 더 나은 방향으로 고민하는 것을 즐깁니다.
        </div>
      </Animator>
    </ScrollPage>
  );
};

export default Second;
