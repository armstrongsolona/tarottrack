import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../../../constants/colors';

interface MainProps {
  children: React.ReactNode;
  title: string;
}

const Main = (props: MainProps) => {
  const { children, title } = props;

  return (
    <MainStyles>
      <h1>{title}</h1>
      {children}
    </MainStyles>
  );
};

const MainStyles = styled.main`
  height: 100%;
  padding: 1rem 0 0 2rem;
`;

export default Main;
