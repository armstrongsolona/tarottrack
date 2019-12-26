import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../Button/Button';
import { BREAKPOINTS } from '../../../../../constants/breakpoints';

interface MainProps {
  callToActionLink: string;
  callToActionText: string;
  children: React.ReactNode;
  title: string;
}

const Main = (props: MainProps) => {
  const { children, callToActionLink, callToActionText, title } = props;

  return (
    <MainStyles>
      <MainInnerStyles>
        <MainTop>
          <MainTitleStyles>{title}</MainTitleStyles>
          <MainCallToActionStyles>
            <Link to={callToActionLink}>
              <Button type='secondary' icon={<FontAwesomeIcon icon={faPlus} />}>
                {callToActionText}
              </Button>
            </Link>
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

  @media screen and (max-width: ${BREAKPOINTS.MOBILE_MAX}px) {
    padding: 1rem 0 0 0;
  }
`;

const MainInnerStyles = styled.div`
  max-width: 48rem;

  @media screen and (max-width: ${BREAKPOINTS.MOBILE_MAX}px) {
    width: 100%;
  }

  @media screen and (max-width: ${BREAKPOINTS.TABLET_MAX}px) {
    max-width: 36rem;
  }
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

  @media screen and (max-width: ${BREAKPOINTS.MOBILE_MAX}px) {
    margin: 0.5rem 0 1.5rem 1.5rem;
  }
`;

const MainCallToActionStyles = styled.span`
  @media screen and (max-width: ${BREAKPOINTS.MOBILE_MAX}px) {
    display: none;
  }
`;

export default Main;
