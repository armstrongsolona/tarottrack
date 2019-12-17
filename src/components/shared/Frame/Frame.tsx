import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faHamburger,
  faSimCard,
} from '@fortawesome/free-solid-svg-icons';
import AppBarTop from './components/AppBarTop/AppBarTop';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
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
      />
      <FrameMainStyles className='FrameMain'>
        <Nav />
        <Main title={title}>{children}</Main>
      </FrameMainStyles>
    </FrameStyles>
  );
};

const FrameStyles = styled.div`
  background: ${COLORS.GREY_MAIN}
  height: 100%;
  min-height: 100vh;
  width: 100%;
`;

const FrameMainStyles = styled.div`
  display: flex;
  height: 100%;
`;

export default Frame;
