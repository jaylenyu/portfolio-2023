import React, { FC, useState, useEffect } from 'react';
import { styled } from 'styled-components';

interface HeaderProps {
  onMoveHome: () => void;
  onMoveContact: () => void;
  onMoveProject: () => void;
  onMoveExperience: () => void;
  onMoveSkill: () => void;
  onMovePotential: () => void;
}

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

  return (
    <>
      {windowWidth < 768 ? (
        <></>
      ) : (
        <HeaderWrap>
          <h1>유정인의 포트폴리오</h1>
          <div>
            <NavBtn onClick={onMoveHome}>Main</NavBtn>
            <NavBtn onClick={onMoveContact}>Contact</NavBtn>
            <NavBtn onClick={onMoveProject}>Project</NavBtn>
            <NavBtn onClick={onMoveExperience}>Experience</NavBtn>
            <NavBtn onClick={onMoveSkill}>Skills</NavBtn>
            <NavBtn onClick={onMovePotential}>Potential</NavBtn>
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
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.23);
`;

const NavBtn = styled.button`
  color: #1d1d1f;
  margin-left: 1rem;
  letter-spacing: 1px;
`;
