import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { NAV_MOBILE_TIMEOUT } from './constants';
import { COLORS } from '../../../../../../../constants/colors';
import { Z_INDEX } from '../../../../../../../constants/z-index';

interface NavMobileDrawerProps {
  children: React.ReactNode;
  sliding: boolean;
  stopSliding(): void;
}

const NavMobileDrawer = (props: NavMobileDrawerProps) => {
  const { children, sliding } = props;

  return (
    <CSSTransition
      classNames='Nav--Mobile-Drawer-In'
      in={sliding}
      timeout={NAV_MOBILE_TIMEOUT}
    >
      <NavMobileDrawerStyles>{children}</NavMobileDrawerStyles>
    </CSSTransition>
  );
};

const NavMobileDrawerStyles = styled.div`
  background: ${COLORS.WHITE};
  border: 1px solid ${COLORS.GREY_LIGHT};
  font-size: 0.9rem;
  position: absolute;
  top: -1rem;
  right: 0;
  width: 14rem;
  visibility: hidden;
  z-index: ${Z_INDEX.NAV_MOBILE};

  &.Nav--Mobile-Drawer-In-enter {
    opacity: 0;
    transform: translateY(0);
    visibility: visible;
  }

  &.Nav--Mobile-Drawer-In-enter-active,
  &.Nav--Mobile-Drawer-In-enter-done {
    opacity: 1;
    transform: translateY(1rem);
    transition: transform ${NAV_MOBILE_TIMEOUT}ms,
      opacity ${NAV_MOBILE_TIMEOUT}ms;
    visibility: visible;
  }

  &.Nav--Mobile-Drawer-In-exit {
    opacity: 1;
    transform: translateY(1rem);
    visibility: visible;
  }

  &.Nav--Mobile-Drawer-In-exit-active {
    opacity: 1;
    transform: translateY(1rem);
    transition: transform ${NAV_MOBILE_TIMEOUT}ms,
      opacity ${NAV_MOBILE_TIMEOUT}ms;
    visibility: visible;
  }

  &.Nav--Mobile-Underlay-In-exit-done {
    opacity: 0;
    visibility: hidden;
  }
`;

export default NavMobileDrawer;
