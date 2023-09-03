import React, { FC } from 'react';
import styled from 'styled-components';

const Footer: FC = () => {
  return <Copyright>&copy; 2023 YU JEONG IN All right reserved.</Copyright>;
};

export default Footer;

const Copyright = styled.p`
  width: 100%;
  padding: 100px 0;
  text-align: center;
  font-size: 10px;
  border-top: 1px solid #c1c3d1;
`;
