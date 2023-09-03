import React, { FC, useState, useEffect } from 'react';
import { styled } from 'styled-components';

const Header: FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth < 768 ? (
        <></>
      ) : (
        <HeaderWrap>
          <h1>유정인의 포트폴리오</h1>
          <div>
            {NAV_LIST.map(({ name, id }) => (
              <NavBtn key={id}>{name}</NavBtn>
            ))}
          </div>
        </HeaderWrap>
      )}
    </>
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

const NavBtn = styled.button`
  color: #1d1d1f;
  margin-left: 1rem;
  letter-spacing: 1px;
`;

const NAV_LIST = [
  { id: 1, name: 'Main' },
  { id: 2, name: 'Contact' },
  { id: 3, name: 'Project' },
  { id: 4, name: 'Skills' },
  { id: 5, name: 'Potentail' }
];
