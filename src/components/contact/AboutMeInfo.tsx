import React, { FC } from 'react';
import { CustomLink } from '../Styles';
import { styled } from 'styled-components';

const AboutMeInfo: FC = () => {
  return (
    <>
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
    </>
  );
};

export default AboutMeInfo;

const IntroContent = styled.dl`
  margin-top: 30px;

  dt {
    margin-bottom: 10px;
    font-size: 2rem;
    font-weight: bold;

    @media screen and ${({ theme }) => theme.tablet} {
      font-size: 1.5rem;
    }

    @media screen and ${({ theme }) => theme.mobile} {
      font-size: 1rem;
      margin-left: 2rem;
    }
  }

  dd {
    font-size: 1rem;
    padding-left: 24px;
    line-height: 2;

    @media screen and ${({ theme }) => theme.mobile} {
      font-size: 0.8rem;
    }
  }
`;
