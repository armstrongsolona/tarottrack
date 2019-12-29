import React from 'react';
import styled from 'styled-components';
import { borderRadiusRound } from '../../../styles/shared';
import { COLORS } from '../../../constants/colors';

interface InputProps {
  type: InputType;
  name: string;
  id?: string;
  label: string;
  labelHidden?: boolean;
  disabled?: boolean;
  error: boolean;
  errorText?: string;
  helpText?: string;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  size?: number;
  placeholder?: string;
  value: string;
  onChange(value: string): void;
  onFocus?(): void;
  onBlur?(): void;
}

interface InputStylesProps {
  readonly error: boolean;
}

export type InputType = 'text' | 'email' | 'number' | 'password' | 'tel';

class Input extends React.Component<InputProps, never> {
  render() {
    const {
      type,
      id,
      name,
      label,
      labelHidden,
      disabled,
      error,
      errorText,
      helpText,
      maxLength,
      minLength,
      required,
      size,
      placeholder,
      value,
    } = this.props;

    const labelOptional = !required && (
      <LabelOptional> (optional)</LabelOptional>
    );

    const labelMarkup = labelHidden ? (
      <InputLabel className='InputLabel--Visually-Hidden'>{label}</InputLabel>
    ) : (
      <InputLabel>{label}</InputLabel>
    );

    const helpTextMarkup = error ? null : (
      <InputHelpTextStyles>{helpText}</InputHelpTextStyles>
    );
    const errorTextMarkup = error ? (
      <InputErrorTextStyles>{errorText}</InputErrorTextStyles>
    ) : null;

    return (
      <>
        {labelMarkup}
        {labelOptional}
        <br />
        <InputStyles
          type={type}
          id={id}
          name={name}
          disabled={disabled}
          error={error}
          placeholder={placeholder}
          maxLength={maxLength}
          minLength={minLength}
          required={required}
          size={size}
          value={value}
          onChange={this.handleChange}
        />
        <br />
        {helpTextMarkup}
        {errorTextMarkup}
      </>
    );
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;

    return onChange(event.currentTarget.value);
  };
}

const InputLabel = styled.label`
  line-height: 2rem;

  &.InputLabel--Visually-Hidden {
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

const LabelOptional = styled.span`
  color: ${COLORS.GREY_MEDIUM};
  font-size: 0.8rem;
`;

const InputStyles = styled.input<InputStylesProps>`
  background: ${COLORS.WHITE};
  border: 1px solid
    ${(props) => (props.error ? COLORS.RED : COLORS.GREY_SHADOW)};
  border-radius: ${borderRadiusRound};
  font-size: 1rem;
  line-height: 1.3rem;
  padding: 0.5rem 0.75rem;

  &.Input--Error {
    border-bottom: 2px solid ${COLORS.BLUE_OCEAN_DARK};
  }
`;

const InputErrorTextStyles = styled.div`
  color: ${COLORS.RED};
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

const InputHelpTextStyles = styled.div`
  color: ${COLORS.GREY_MEDIUM};
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

export default Input;
