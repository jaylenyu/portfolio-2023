import React, { FC } from 'react';
import ScrollComponent from '../components/ScrollComponent';
import Experience from '../components/Experience';
import Skill from '../components/Skill';

const Main: FC = () => {
  return (
    <div>
      <ScrollComponent />
      <Experience />
      <Skill />
    </div>
  );
};

export default Main;
