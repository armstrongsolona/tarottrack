import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../../../../constants/colors";

interface LinkProps {
  children: React.ReactNode;
}

const Link = (props: LinkProps) => {
  const { children } = props;

  return <LinkStyles>{children}</LinkStyles>;
};

const LinkStyles = styled.li`
  background: ${COLORS.WHITE};
  cursor: pointer;
  height: 100%;
  list-style-type: none;
  margin: 0.5rem 0;
  padding: 0.5rem 0 0.5rem 1rem;

  &:hover {
    background: ${COLORS.GREY_LIGHT};
  }
`;

export default Link;
