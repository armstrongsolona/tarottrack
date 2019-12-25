import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BREAKPOINTS } from '../../../../../constants/breakpoints';

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
          <MainCallToActionStyles>
            <Link to={callToActionLink}>{callToAction}</Link>
          </MainCallToActionStyles>
        </MainTop>
        {children}
      </MainInnerStyles>
    </MainStyles>
  );
};

const MainStyles = styled.main`
  padding: 1rem 2rem 0 2rem;
  width: 100%;

  @media screen and (max-width: ${BREAKPOINTS.TABLET_MAX}px) {
    padding: 1rem 2rem 0 0;
  }
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

  @media screen and (max-width: ${BREAKPOINTS.TABLET_MAX}px) {
    padding: 0 0 0 2rem;
  }
`;

const MainCallToActionStyles = styled.span`
  @media screen and (max-width: ${BREAKPOINTS.TABLET_MAX}px) {
    margin-right: 2rem;
  }
`;

export default Main;
