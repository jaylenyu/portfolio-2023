import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CustomLink = styled(Link)`
  padding-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`;
