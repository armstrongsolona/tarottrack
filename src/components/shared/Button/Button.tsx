import React from 'react';
import styled from 'styled-components';
import {
  borderRadiusRound,
  boxShadow,
  boxShadowInset,
} from '../../../styles/shared';
import { COLORS } from '../../../constants/colors';

interface ButtonProps {
  children: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  id?: string;
  type: ButtonType;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
}

export type ButtonType = 'primary' | 'secondary' | 'tertiary';

const Button = (props: ButtonProps) => {
  const {
    children,
    disabled = false,
    icon,
    id,
    type = 'primary',
    onClick,
  } = props;

  let StyledButtonComponent = ButtonPrimaryStyles;

  if (type === 'secondary') {
    StyledButtonComponent = ButtonSecondaryStyles;
  } else if (type === 'tertiary') {
    StyledButtonComponent = ButtonTertiaryStyles;
  }

  const markup = icon ? (
    <ButtonIconWrapperStyles>
      <ButtonIconStyles>{icon}</ButtonIconStyles>
      {children}
    </ButtonIconWrapperStyles>
  ) : (
    children
  );

  return (
    <StyledButtonComponent disabled={disabled} id={id} onClick={onClick}>
      {markup}
    </StyledButtonComponent>
  );
};

export const ButtonStyles = styled.button`
  border: none;
  border-radius: ${borderRadiusRound};
  box-shadow: ${boxShadow};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.07rem;
  padding: 0.8rem 1rem;

  &:active {
    box-shadow: ${boxShadowInset};
  }
`;

const ButtonPrimaryStyles = styled(ButtonStyles)`
  background: ${COLORS.BLUE_BEZIQUE_MEDIUM};
  color: ${COLORS.WHITE};

  &:hover,
  &:focus {
    background: ${COLORS.BLUE_BEZIQUE_LIGHT};
  }
`;

export const ButtonSecondaryStyles = styled(ButtonStyles)`
  background: ${COLORS.BLUE_OCEAN_MEDIUM};
  color: ${COLORS.WHITE};
  font-size: 0.9rem;
  font-weight: bold;

  &:hover,
  &:focus {
    background: ${COLORS.BLUE_OCEAN_LIGHT};
  }
`;

export const ButtonTertiaryStyles = styled(ButtonStyles)`
  background: ${COLORS.WHITE};
  color: ${({ disabled }) => (disabled ? COLORS.GREY_LIGHT : COLORS.BLACK)};
  border: 1px solid ${COLORS.GREY_SHADOW};

  &:hover,
  &:focus {
    background: ${COLORS.GREY_LIGHTER};
  }
`;

const ButtonIconStyles = styled.span`
  margin-right: 0.5rem;
`;

const ButtonIconWrapperStyles = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Button;
