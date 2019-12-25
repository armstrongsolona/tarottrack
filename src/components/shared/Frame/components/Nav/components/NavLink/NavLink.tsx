import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../../../../../constants/colors';
import { BREAKPOINTS } from '../../../../../../../constants/breakpoints';

// TODO: repaint window resize

interface LinkProps {
  children: React.ReactNode;
  className?: string;
  icon: React.ReactNode;
}

const Link = (props: LinkProps) => {
  const { children, className, icon } = props;

  const markup = icon ? (
    <LinkIconWrapper className={className}>
      <LinkIcon>{icon}</LinkIcon>
      <LinkText>{children}</LinkText>
    </LinkIconWrapper>
  ) : (
    children
  );

  return <LinkStyles>{markup}</LinkStyles>;
};

const LinkStyles = styled.li`
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

const LinkIcon = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-right: 0.75rem;
  width: 1rem;

  @media screen and (max-width: ${BREAKPOINTS.TABLET_MAX}px) {
    margin-right: 0;
  }
`;

const LinkText = styled.span`
  @media screen and (max-width: ${BREAKPOINTS.TABLET_MAX}px) {
    display: none;
  }
`;

const LinkIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Link;
