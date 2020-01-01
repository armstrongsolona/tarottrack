import React from 'react';
import styled from 'styled-components';
import { ButtonStyles } from '../Button/Button';
import { boxShadowInsetPressed } from '../../../styles/shared';
import { COLORS } from '../../../constants/colors';

interface CheckboxButtonProps {
  name: string;
  id: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
  error?: boolean;
  onMouseDown(value: string): void;
  onFocus?(): void;
  onBlur?(): void;
}

interface CheckboxButtonStylesProps {
  readonly checked: boolean;
}

class CheckboxButton extends React.Component<CheckboxButtonProps, never> {
  render() {
    const { id, name, label, checked, disabled } = this.props;
    console.log('checked', `${id} ${checked}`);

    return (
      <CheckboxButtonStyles
        role='checkbox'
        aria-checked={checked}
        id={id}
        name={name}
        disabled={disabled}
        checked={checked}
        onMouseDown={this.handleClick}
      >
        {label}
      </CheckboxButtonStyles>
    );
  }

  handleClick = () => {
    const { onMouseDown, id } = this.props;

    return onMouseDown(id);
  };
}

const CheckboxButtonStyles = styled(ButtonStyles)<CheckboxButtonStylesProps>`
  background: ${(props) =>
    props['aria-checked'] ? COLORS.GREY_LIGHT : COLORS.WHITE};
  border: 1px solid ${COLORS.GREY_SHADOW};
  box-shadow: ${(props) =>
    props['aria-checked'] ? boxShadowInsetPressed : 'none'};
  ${(props) => (props['aria-checked'] ? 'text-shadow: 1px 1px #fff' : null)};
  font-weight: 400;
  font-size: 1rem;
  margin: 0 0.5rem 0 0;
  padding: 0.75rem 1rem;

  &:active {
    box-shadow: ${(props) =>
      props['aria-checked'] ? boxShadowInsetPressed : 'none'};
  }

  &.CheckboxButton--Error {
    border-bottom: 2px solid ${COLORS.BLUE_OCEAN_DARK};
  }
`;

export default CheckboxButton;
