import React, { FC } from 'react';
import { styled } from 'styled-components';
import { CustomWrap, CustomTitle, CustomArticle } from './Styles';
import { StudyListType } from '../types/components';

const Potential: FC = () => {
  return (
    <CustomWrap>
      <CustomTitle>Potential</CustomTitle>
      <PotentialWrap>
        <CommitBox>
          <img
            src="https://ghchart.rshah.org/000000/jaylenyu"
            alt="github commit"
          />
        </CommitBox>
        <CustomArticle>
          2월 부터 시작하여 팀 프로젝트 및 개인 프로젝트, 알고리즘 테스트로
          꾸준히 커밋을 남기고 있습니다.
        </CustomArticle>
      </PotentialWrap>
      <PotentialWrap>
        <Table>
          <tbody>
            <tr>
              <th>분류</th>
              <th>제목</th>
              <th>수행여부</th>
            </tr>
            {STUDY_LIST.map(({ id, category, title, progress }) => (
              <tr key={id}>
                <td>{category}</td>
                <td>{title}</td>
                <td>{progress}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </PotentialWrap>
    </CustomWrap>
  );
};

export default Potential;

const PotentialWrap = styled.div`
  ${({ theme }) => theme.flexBox('center', 'center', 'column')};
  margin-bottom: 5rem;
`;

const CommitBox = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 100%;
  }
`;

const Table = styled.table`
  ${({ theme }) => theme.flexBox('center', 'center', 'column')};
  box-shadow: ${({ theme }) => theme.shadow};

  th {
    color: #d5dde5;
    background: #1b1e24;
    border-bottom: 4px solid #9ea7af;
    border-right: 1px solid #343a45;
    font-size: 1.2rem;
    font-weight: 100;
    padding: 24px;
    text-align: center;
    vertical-align: middle;
  }

  th:first-child {
    border-top-left-radius: 3px;
  }

  th:last-child {
    border-top-right-radius: 3px;
    border-right: none;
  }

  tr {
    border-top: 1px solid #c1c3d1;
    border-bottom: 1px solid #c1c3d1;
    color: ${({ theme }) => theme.gray};
    font-size: 1rem;
  }

  tr:hover td {
    background: #4e5066;
    color: #ffffff;
    border-top: 1px solid #22262e;
  }

  tr:first-child {
    border-top: none;
  }

  tr:last-child {
    border-bottom: none;
  }

  tr:nth-child(odd) td {
    background: #ebebeb;
  }

  tr:nth-child(odd):hover td {
    background: #4e5066;
  }

  tr:last-child td:first-child {
    border-bottom-left-radius: 3px;
  }

  tr:last-child td:last-child {
    border-bottom-right-radius: 3px;
  }

  td {
    background: #ffffff;
    padding: 20px;
    text-align: center;
    vertical-align: middle;
    font-weight: 300;
    font-size: 1rem;
  }

  tr:last-child {
    border-bottom: 1px solid #c1c3d1;
  }

  @media screen and ${({ theme }) => theme.mobile} {
    th {
      padding: 1rem 0;
      font-size: 0.8rem;
    }
    td {
      padding: 1rem 0.5rem;
      font-size: 0.8rem;
    }
  }
`;

const STUDY_LIST: StudyListType[] = [
  {
    id: 1,
    category: '도서',
    title: '면접을 위한 전공지식 노트',
    progress: '완료'
  },
  {
    id: 2,
    category: '도서',
    title: '코어 자바스크립트',
    progress: '완료'
  },
  {
    id: 3,
    category: '도서',
    title: '한 입 크기로 잘라먹는 리액트',
    progress: '완료'
  },
  {
    id: 4,
    category: '도서',
    title: '모던 자바스크립트 Deep Dive',
    progress: '진행중'
  },
  {
    id: 5,
    category: '강의',
    title: '바닐라 JS로 크롬앱 만들기',
    progress: '완료'
  },
  {
    id: 6,
    category: '강의',
    title: '노마드코더 코코아톡 클론코딩',
    progress: '완료'
  },
  {
    id: 7,
    category: '강의',
    title: '한 입 크기로 잘라먹는 타입스크립트',
    progress: '완료'
  },
  {
    id: 8,
    category: '강의',
    title: 'Next.js & React - 완벽 정복 가이드',
    progress: '진행중'
  },
  {
    id: 9,
    category: '강의',
    title: '프로젝트로 배우는 React.js & Next.js 마스터리 클래스',
    progress: '진행중'
  }
];
