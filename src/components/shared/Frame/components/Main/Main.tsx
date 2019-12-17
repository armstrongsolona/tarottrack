import React from 'react';
import styled from 'styled-components';

interface MainProps {
  children: React.ReactNode;
  title: string;
}

const Main = (props: MainProps) => {
  const { children, title } = props;

  return (
    <MainStyles>
      <MainTitleStyles>{title}</MainTitleStyles>
      {children}
    </MainStyles>
  );
};

const MainStyles = styled.main`
  height: 100%;
  padding: 1rem 0 0 2rem;
  width: 100%;
`;

const MainTitleStyles = styled.h1`
  font-size: 1.3rem;
  font-weight: 400;
  margin: 0.5rem 0 1.5rem 0;
  padding: 0;
`;

export default Main;
