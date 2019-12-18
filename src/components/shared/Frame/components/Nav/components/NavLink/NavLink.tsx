import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../../../../../constants/colors';

interface LinkProps {
  children: React.ReactNode;
  icon: React.ReactNode;
}

const Link = (props: LinkProps) => {
  const { children, icon } = props;

  const markup = icon ? (
    <LinkIconWrapper>
      <LinkIcon>{icon}</LinkIcon>
      {children}
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
`;

const LinkIcon = styled.span`
  margin-right: 0.75rem;
  width: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const LinkIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Link;
