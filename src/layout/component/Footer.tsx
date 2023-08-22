import React, { FC } from 'react';
import styled from 'styled-components';

const Footer: FC = () => {
  return <Copyright>&copy; 2023 YU JEONG IN All right reserved.</Copyright>;
};

export default Footer;

const Copyright = styled.p`
  width: 100%;
  padding-bottom: 100px;
  text-align: center;
  font-size: 10px;
`;
