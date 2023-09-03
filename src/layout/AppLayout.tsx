import React, { FC, useRef } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import ScrollComponent from '../pages/ScrollComponent';

const AppLayout: FC = () => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null);
  const potentialRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Header
        onMoveHome={() =>
          homeRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
        onMoveContact={() =>
          contactRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
        onMoveProject={() =>
          projectRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
        onMoveExperience={() =>
          experienceRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
        onMoveSkill={() =>
          skillRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
        onMovePotential={() =>
          potentialRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
      />
      <ScrollComponent
        homeRef={homeRef}
        contactRef={contactRef}
        projectRef={projectRef}
        experienceRef={experienceRef}
        skillRef={skillRef}
        potentialRef={potentialRef}
      />
      <Footer />
    </>
  );
};

export default AppLayout;
