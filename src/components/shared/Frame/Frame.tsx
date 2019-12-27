import React from 'react';
import styled from 'styled-components';
import AppBarTop from './components/AppBarTop/AppBarTop';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import { APP_BAR_TOP_HEIGHT, ONE_REM } from './constants';
import { COLORS } from '../../../constants/colors';
import { BREAKPOINTS } from '../../../constants/breakpoints';

interface FrameProps {
  callToActionText?: string;
  callToActionLink?: string;
  children: React.ReactNode;
  title: string;
}

const Frame = (props: FrameProps) => {
  const { callToActionText, callToActionLink, children, title } = props;

  return (
    <FrameStyles className='Frame'>
      <AppBarTop />
      <FrameMainStyles className='FrameMain'>
        <Nav />
        <Main
          callToActionText={callToActionText}
          callToActionLink={callToActionLink}
          title={title}
        >
          {children}
        </Main>
      </FrameMainStyles>
    </FrameStyles>
  );
};

const FrameStyles = styled.div`
  background: ${COLORS.GREY_MAIN}
  height: 100%;
  width: 100%;
`;

const FrameMainStyles = styled.div`
  display: flex;
  height: calc(100% - ${APP_BAR_TOP_HEIGHT * ONE_REM}px);

  @media screen and (max-width: ${BREAKPOINTS.TABLET_MAX}px) {
    flex-direction: column;
  }
`;

export default Frame;
