import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../../../../../constants/colors';
import { BREAKPOINTS } from '../../../../../../../constants/breakpoints';

// TODO: repaint window resize

interface NavLinkProps {
  className?: string;
  icon: React.ReactNode;
  textDesktop: string;
  textTablet: string;
}

const Link = (props: NavLinkProps) => {
  const { className, icon, textTablet, textDesktop } = props;

  return (
    <NavLinkStyles>
      <NavLinkIconWrapper className={className}>
        <NavLinkIcon>{icon}</NavLinkIcon>
        <NavLinkTextTablet>{textTablet}</NavLinkTextTablet>
        <NavLinkTextDesktop>{textDesktop}</NavLinkTextDesktop>
      </NavLinkIconWrapper>
    </NavLinkStyles>
  );
};

const NavLinkStyles = styled.li`
  background: ${COLORS.GREY_LIGHTER};
  color: ${COLORS.BLACK};
  cursor: pointer;
  height: 100%;
  list-style-type: none;
  padding: 0.75rem 0 0.75rem 1rem;

  &:hover {
    background: ${COLORS.WHITE};
  }

  @media screen and (max-width: ${BREAKPOINTS.TABLET_MAX}px) {
    border-left: 1px solid ${COLORS.GREY_LIGHT};
    border-right: 1px solid ${COLORS.GREY_LIGHT};
    display: flex;
    height: auto;
    padding: 0.75rem 0;
    justify-content: center;
    width: ${window.innerWidth / 4}px;

    &:first-of-type {
      border-left: none;
    }

    &:last-of-type {
      border-right: none;
    }
  }
`;

const NavLinkIcon = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-right: 0.75rem;
  width: 1rem;

  @media screen and (max-width: ${BREAKPOINTS.TABLET_MAX}px) {
    margin-right: 0;
  }
`;

export const NavLinkTextTablet = styled.span`
  @media screen and (min-width: ${BREAKPOINTS.TABLET_MIN}px) and (max-width: ${BREAKPOINTS.TABLET_MAX}px) {
    margin-left: 0.5rem;
  }

  @media screen and (min-width: ${BREAKPOINTS.DESKTOP_MIN}px) {
    display: none;
  }
`;

export const NavLinkTextDesktop = styled.span`
  @media screen and (max-width: ${BREAKPOINTS.TABLET_MAX}px) {
    display: none;
  }
`;

const NavLinkIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Link;
