import React from 'react';
import styled from 'styled-components';
import { boxShadow, boxShadowInset } from '../../../styles/shared';
import { COLORS } from '../../../constants/colors';

interface ButtonProps {
  children: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  id: string;
  type: ButtonType;
}

export type ButtonType = 'primary' | 'secondary' | 'tertiary';

const Button = (props: ButtonProps) => {
  const { children, disabled = false, icon, id, type = 'primary' } = props;

  let StyledButtonComponent = ButtonPrimary;

  if (type === 'secondary') {
    StyledButtonComponent = ButtonSecondary;
  } else if (type === 'tertiary') {
    StyledButtonComponent = ButtonTertiary;
  }

  const markup = icon ? (
    <ButtonIconWrapper>
      <ButtonIcon>{icon}</ButtonIcon>
      {children}
    </ButtonIconWrapper>
  ) : (
    children
  );

  return (
    <StyledButtonComponent disabled={disabled} id={id}>
      {markup}
    </StyledButtonComponent>
  );
};

const ButtonStyles = styled.button`
  border: none;
  border-radius: 0.75rem;
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

const ButtonIcon = styled.span`
  margin-right: 0.5rem;
`;

const ButtonIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Button;
