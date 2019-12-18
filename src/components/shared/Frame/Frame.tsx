import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faHamburger,
  faSimCard,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import AppBarTop from './components/AppBarTop/AppBarTop';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Button from '../Button/Button';
import { APP_BAR_TOP_HEIGHT, ONE_REM } from './constants';
import { COLORS } from '../../../constants/colors';

interface FrameProps {
  children: React.ReactNode;
  title: string;
}

const Frame = (props: FrameProps) => {
  const { children, title } = props;

  return (
    <FrameStyles className='Frame'>
      <AppBarTop
        logo={<FontAwesomeIcon icon={faSimCard} />}
        accountMenu={<FontAwesomeIcon icon={faCoffee} />}
        mobileMenu={<FontAwesomeIcon icon={faHamburger} />}
        username='MyTempUsername'
      />
      <FrameMainStyles className='FrameMain'>
        <Nav />
        <Main
          callToAction={
            <Button
              type='secondary'
              icon={<FontAwesomeIcon icon={faPlus} />}
              id='new-reading'
            >
              New reading
            </Button>
          }
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
`;

export default Frame;
