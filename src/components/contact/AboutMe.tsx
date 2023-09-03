import React, { FC } from 'react';
import { styled } from 'styled-components';

const AboutMe: FC = () => {
  return <AboutMeContainer>AboutMe </AboutMeContainer>;
};

export default AboutMe;

const AboutMeContainer = styled.div`
  font-size: 5rem;

  @media screen and ${({ theme }) => theme.tablet} {
    font-size: 3rem;
  }

  @media screen and ${({ theme }) => theme.mobile} {
    font-size: 2rem;
  }
`;
