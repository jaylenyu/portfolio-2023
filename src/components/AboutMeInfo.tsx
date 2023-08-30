import React, { FC } from 'react';
import { CustomLink } from './Styles';
import { styled } from 'styled-components';

const AboutMeInfo: FC = () => {
  return (
    <AboutMeInfoContainer>
      <IntroContent>
        <dt>Contact</dt>
        <dd>Phone : 010-7775-2097</dd>
        <dd>Email : jaylenyu96@gmail.com</dd>
      </IntroContent>
      <IntroContent>
        <dt>Channel</dt>
        <dd>
          Blog :{' '}
          <CustomLink to="https://jaylenyu.tistory.com">
            jaylenyu.tistory.com
          </CustomLink>
        </dd>
        <dd>
          Github :{' '}
          <CustomLink to="https://github.com/jaylenyu">
            github.com/jaylenyu
          </CustomLink>
        </dd>
      </IntroContent>
    </AboutMeInfoContainer>
  );
};

export default AboutMeInfo;

const AboutMeInfoContainer = styled.div``;

const IntroContent = styled.dl`
  margin-top: 30px;

  dt {
    margin-bottom: 10px;
    font-size: 2rem;
    font-weight: bold;
  }

  dd {
    font-size: 1rem;
    padding-left: 24px;
    line-height: 2;
  }
`;
