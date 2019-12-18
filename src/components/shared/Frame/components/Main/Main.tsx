import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface MainProps {
  children: React.ReactNode;
  callToAction: React.ReactNode;
  callToActionLink: string;
  title: string;
}

const Main = (props: MainProps) => {
  const { children, callToAction, callToActionLink, title } = props;

  return (
    <MainStyles>
      <MainInnerStyles>
        <MainTop>
          <MainTitleStyles>{title}</MainTitleStyles>
          <Link to={callToActionLink}>{callToAction}</Link>
        </MainTop>
        {children}
      </MainInnerStyles>
    </MainStyles>
  );
};

const MainStyles = styled.main`
  padding: 1rem 2rem 0 2rem;
  width: 100%;
`;

const MainInnerStyles = styled.div`
  max-width: 40rem;
`;

const MainTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const MainTitleStyles = styled.h1`
  font-size: 1.3rem;
  font-weight: 400;
  margin: 0.5rem 0 1.5rem 0;
  padding: 0;
`;

export default Main;
