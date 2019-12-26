import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { NAV_MOBILE_TIMEOUT } from './constants';
import { COLORS } from '../../../../../../../constants/colors';
import { Z_INDEX } from '../../../../../../../constants/z-index';

interface NavMobileUnderlayProps {
  sliding: boolean;
  onClick(): void;
}

const NavMobileUnderlay = (props: NavMobileUnderlayProps) => {
  const { onClick, sliding } = props;

  return (
    <CSSTransition
      classNames='Nav--Mobile-Underlay-In'
      in={sliding}
      timeout={NAV_MOBILE_TIMEOUT}
    >
      <NavMobileUnderlayStyles onClick={onClick} />
    </CSSTransition>
  );
};

export default NavMobileUnderlay;

const NavMobileUnderlayStyles = styled.div`
  background: ${COLORS.BLACK};
  cursor: default;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  visibility: hidden;
  z-index: ${Z_INDEX.UNDERLAY};

  &.Nav--Mobile-Underlay-In-enter {
    opacity: 0;
    visibility: visible;
  }

  &.Nav--Mobile-Underlay-In-enter-active,
  &.Nav--Mobile-Underlay-In-enter-done {
    opacity: 0.7;
    transition: opacity ${NAV_MOBILE_TIMEOUT}ms;
    visibility: visible;
  }

  &.Nav--Mobile-Underlay-In-exit {
    opacity: 0.7;
    visibility: visible;
  }

  &.Nav--Mobile-Underlay-In-exit-active {
    opacity: 0.7;
    transition: opacity ${NAV_MOBILE_TIMEOUT}ms;
    visibility: visible;
  }

  &.Nav--Mobile-Underlay-In-exit-done {
    opacity: 0;
    visibility: hidden;
  }
`;
