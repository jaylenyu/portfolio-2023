import React, { FC } from 'react';
import { styled } from 'styled-components';

const Header: FC = () => {
  return (
    <HeaderWrap>
      <h1>LOGO</h1>
      <NavWrap>
        {NAV_LIST.map(({ name, id }) => (
          <NavBtn key={id}>{name}</NavBtn>
        ))}
      </NavWrap>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  ${({ theme }) => theme.flexBox('space-between', 'center', undefined)};
  position: sticky;
  top: 0;
  height: 4rem;
  background-color: #f5f5f7;
  z-index: 100;
  padding: 0px 20px;
`;

const NavWrap = styled.div``;

const NavBtn = styled.button`
  color: #1d1d1f;
  margin-left: 1rem;
  letter-spacing: 1px;
`;

const NAV_LIST = [
  { id: 1, name: 'Main' },
  { id: 2, name: 'Contact' },
  { id: 3, name: 'Project' },
  { id: 4, name: 'Skills' }
];
