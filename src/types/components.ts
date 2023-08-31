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

export type SkillIconType = {
  id: number;
  img: string;
};
