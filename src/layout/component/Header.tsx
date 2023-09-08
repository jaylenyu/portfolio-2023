import React, { FC, useState, useEffect } from 'react';
import { HeaderProps } from '../../types/components';
import { styled } from 'styled-components';

const Header: FC<HeaderProps> = ({
  onMoveHome,
  onMoveContact,
  onMoveProject,
  onMoveExperience,
  onMoveSkill,
  onMovePotential
}) => {
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

  const navItems = [
    { label: 'Main', onClick: onMoveHome },
    { label: 'Contact', onClick: onMoveContact },
    { label: 'Project', onClick: onMoveProject },
    { label: 'Experience', onClick: onMoveExperience },
    { label: 'Skills', onClick: onMoveSkill },
    { label: 'Potential', onClick: onMovePotential }
  ];

  return (
    <>
      {windowWidth < 768 ? (
        <></>
      ) : (
        <HeaderWrap>
          <HeaderBox>
            <img src="/images/star.png" alt="star" />
            <h1>유정인의 포트폴리오</h1>
          </HeaderBox>
          <NavContainer>
            {navItems.map((item, index) => (
              <NavBtn key={index} onClick={item.onClick}>
                {item.label}
              </NavBtn>
            ))}
          </NavContainer>
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
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.23);
`;

const HeaderBox = styled.div`
  ${({ theme }) => theme.flexBox('', 'center', undefined)};

  img {
    width: 1rem;
  }
  h1 {
    margin-left: 2px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavBtn = styled.button`
  color: #1d1d1f;
  margin-left: 1rem;
  letter-spacing: 1px;
`;
