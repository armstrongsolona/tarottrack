import React from 'react';
import styled from 'styled-components';
import { ButtonStyles } from '../Button/Button';
import { boxShadowInset } from '../../../styles/shared';
import { COLORS } from '../../../constants/colors';

interface CheckboxButtonProps {
  name: string;
  id?: string;
  value: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
  error?: boolean;
  onChange?(value: string, id: string): void;
  onFocus?(): void;
  onBlur?(): void;
}

interface CheckboxButtonStylesProps {
  readonly checked: boolean;
}

class CheckboxButton extends React.Component<CheckboxButtonProps, never> {
  render() {
    const { id, name, value, label, checked, disabled } = this.props;

    return (
      <CheckboxButtonStyles
        role='checkbox'
        aria-checked={checked}
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
      >
        {label}
      </CheckboxButtonStyles>
    );
  }
}

const CheckboxButtonStyles = styled(ButtonStyles)<CheckboxButtonStylesProps>`
  background: ${(props) =>
    props['aria-checked'] ? COLORS.GREY_LIGHT : COLORS.WHITE};
  border: 1px solid ${COLORS.GREY_SHADOW};
  box-shadow: ${(props) => (props['aria-checked'] ? boxShadowInset : 'none')};
  font-weight: 400;
  font-size: 1rem;
  margin: 0 0.5rem 0 0;
  padding: 0.75rem 1rem;

  &.CheckboxButton--Error {
    border-bottom: 2px solid ${COLORS.BLUE_OCEAN_DARK};
  }
`;

export default CheckboxButton;
