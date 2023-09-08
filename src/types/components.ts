import React from 'react';

export interface ScrollComponentProps {
  homeRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
  skillRef: React.RefObject<HTMLDivElement>;
  potentialRef: React.RefObject<HTMLDivElement>;
}

export interface HeaderProps {
  onMoveHome: () => void;
  onMoveContact: () => void;
  onMoveProject: () => void;
  onMoveExperience: () => void;
  onMoveSkill: () => void;
  onMovePotential: () => void;
}

export interface ProjectDataProps {
  id: number;
  name: string;
  img: string;
  title: string;
  date: string;
  skill: string[];
  contents: string[];
  url: string;
}

export interface ShowFadeProps {
  showFade: boolean;
}

export interface ExperienceDataProps {
  id: number;
  img: string;
  title: string;
  part: string;
  date: string;
  detail: string;
  subTitle: string;
  subDetail: string[];
  subDetailList?: string[] | undefined;
  url: string;
  urlText: string;
}

export interface SkillIconProps {
  id: number;
  img: string;
};

export interface StudyListProps {
  id: number;
  category: string;
  title: string;
  progress: string;
};
