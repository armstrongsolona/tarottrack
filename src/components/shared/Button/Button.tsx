import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";

interface ButtonProps {
  children: string;
  disabled?: boolean;
  id: string;
  type: ButtonType;
}

export type ButtonType = "primary" | "secondary" | "tertiary";

const Button = (props: ButtonProps) => {
  const { children, disabled = false, id, type = "primary" } = props;

  let StyledButtonComponent = ButtonPrimary;

  if (type === "secondary") {
    StyledButtonComponent = ButtonSecondary;
  } else if (type === "tertiary") {
    StyledButtonComponent = ButtonTertiary;
  }

  return (
    <StyledButtonComponent disabled={disabled} id={id}>
      {children}
    </StyledButtonComponent>
  );
};

const ButtonStyles = styled.button`
  border: none;
  border-radius: 0.75rem;
  box-shadow: 2px 2px 5px ${COLORS.GREY_SHADOW};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem 1rem;

  &:active {
    box-shadow: inset 1px 1px 2px ${COLORS.GREY_SHADOW};
  }
`;

const ButtonPrimary = styled(ButtonStyles)`
  background: ${COLORS.BLUE_BEZIQUE_MEDIUM};
  color: ${COLORS.WHITE};

  &:hover,
  &:focus {
    background: ${COLORS.BLUE_BEZIQUE_LIGHT};
  }
`;

const ButtonSecondary = styled(ButtonStyles)`
  background: ${COLORS.BLUE_OCEAN_MEDIUM};
  color: ${COLORS.WHITE};

  &:hover,
  &:focus {
    background: ${COLORS.BLUE_OCEAN_LIGHT};
  }
`;

const ButtonTertiary = styled(ButtonStyles)`
  background: ${COLORS.WHITE};
  color: ${({ disabled }) => (disabled ? COLORS.GREY_LIGHT : COLORS.BLACK)};

  &:hover,
  &:focus {
    background: ${COLORS.GREY_LIGHTER};
  }
`;

export default Button;
