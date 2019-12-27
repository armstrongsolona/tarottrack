import React from 'react';
import styled from 'styled-components';
import { borderRadiusRound } from '../../../styles/shared';
import { COLORS } from '../../../constants/colors';

interface CheckboxProps {
  name: string;
  id?: string;
  value: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  onChange?(value: string, id: string): void;
  onFocus?(): void;
  onBlur?(): void;
}

class Checkbox extends React.Component<CheckboxProps, never> {
  render() {
    const { id, name, value, label, checked, disabled, error } = this.props;

    const borderColor = error ? COLORS.RED : COLORS.GREY_SHADOW;

    return (
      <CheckboxWrapperStyles>
        <CheckboxFakeStyles color={borderColor}>
          <CheckboxStyles
            type='checkbox'
            id={id}
            checked={checked}
            name={name}
            value={value}
            disabled={disabled}
          />
        </CheckboxFakeStyles>
        <CheckboxLabel>{label}</CheckboxLabel>
      </CheckboxWrapperStyles>
    );
  }
}

const CheckboxWrapperStyles = styled.div`
  display: flex;
  margin: 0 1.5rem 0.5rem 0;
`;

const CheckboxFakeStyles = styled.span`
  background: ${COLORS.WHITE};
  border: 1px solid ${({ color }) => color && color};
  border-radius: ${borderRadiusRound};
  margin: 0 0.5rem 0 0;
  position: relative;
  width: 2rem;

  &.Checkbox--Error {
    border-bottom: 2px solid ${COLORS.BLUE_OCEAN_DARK};
  }
`;

const CheckboxStyles = styled.input`
  position: absolute;
  top: 0;
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
  height: 1px;
  width: 1px;
  padding: 0;
  border: 0;
`;

const CheckboxLabel = styled.label`
  &.CheckboxLabel--Visually-Hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;

export default Checkbox;
