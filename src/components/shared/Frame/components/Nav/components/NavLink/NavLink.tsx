import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../../../../../constants/colors';
import { BREAKPOINTS } from '../../../../../../../constants/breakpoints';

// TODO: repaint window resize

interface NavLinkProps {
  children: string;
  icon?: React.ReactNode;
  inverseColors?: boolean;
}

const NavLink = (props: NavLinkProps) => {
  const { children, icon, inverseColors } = props;

  const iconMarkup = icon ? <NavLinkIcon>{icon}</NavLinkIcon> : null;
  const className = inverseColors ? 'Nav--Link-Inverse' : 'Nav--Link-Default';

  return (
    <NavLinkStyles className={className}>
      <NavLinkIconWrapper>
        {iconMarkup}
        {children}
      </NavLinkIconWrapper>
    </NavLinkStyles>
  );
};

const NavLinkStyles = styled.li`
  color: ${COLORS.BLACK};
  cursor: pointer;
  height: 100%;
  list-style-type: none;
  padding: 0.75rem 0 0.75rem 1rem;

  &.Nav--Link-Default {
    background: ${COLORS.GREY_LIGHTER};

    &:hover {
      background: ${COLORS.WHITE};
    }
  }

  &.Nav--Link-Inverse {
    background: ${COLORS.WHITE};

    &:hover {
      background: ${COLORS.GREY_LIGHTER};
    }
  }
`;

const NavLinkIcon = styled.span`
  display: flex;
  justify-content: flex-start;
  width: 1.5rem;

  @media screen and (max-width: ${BREAKPOINTS.TABLET_MAX}px) {
    margin-right: 0;
  }
`;

const NavLinkIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default NavLink;
