import React from 'react';
import styled from 'styled-components';
import { borderRadiusRound } from '../../../styles/shared';
import { COLORS } from '../../../constants/colors';

interface TextAreaProps {
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
  rows?: number;
  cols?: number;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange(value: string): void;
  onFocus?(): void;
  onBlur?(): void;
}

interface TextAreaStylesProps {
  readonly error: boolean;
}

class TextArea extends React.Component<TextAreaProps, never> {
  render() {
    const {
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
      rows,
      cols,
      required,
      placeholder,
      value,
    } = this.props;

    const labelOptional = required && (
      <LabelOptional> *</LabelOptional>
    );

    const labelMarkup = labelHidden ? (
      <TextAreaLabel className='TextAreaLabel--Visually-Hidden'>
        {label}
      </TextAreaLabel>
    ) : (
      <TextAreaLabel>{label}</TextAreaLabel>
    );

    const helpTextMarkup = error ? null : (
      <TextAreaHelpTextStyles>{helpText}</TextAreaHelpTextStyles>
    );
    const errorTextMarkup = error ? (
      <TextAreaErrorTextStyles>{errorText}</TextAreaErrorTextStyles>
    ) : null;

    return (
      <>
        {labelMarkup}
        {labelOptional}
        <br />
        <TextAreaStyles
          id={id}
          name={name}
          disabled={disabled}
          error={error}
          placeholder={placeholder}
          maxLength={maxLength}
          minLength={minLength}
          cols={cols}
          rows={rows}
          required={required}
          value={value}
          onChange={this.handleChange}
        />
        <br />
        {helpTextMarkup}
        {errorTextMarkup}
      </>
    );
  }

  handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { onChange } = this.props;

    return onChange(event.currentTarget.value);
  };
}

const TextAreaLabel = styled.label`
  line-height: 2rem;

  &.TextAreaLabel--Visually-Hidden {
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
  color: ${COLORS.RED};
  font-size: 0.8rem;
  font-weight: bold;
`;

const TextAreaStyles = styled.textarea<TextAreaStylesProps>`
  background: ${COLORS.WHITE};
  border: 1px solid
    ${(props) => (props.error ? COLORS.RED : COLORS.GREY_SHADOW)};
  border-radius: ${borderRadiusRound};
  font-size: 1rem;
  line-height: 1.3rem;
  padding: 0.5rem 0.75rem;

  &.TextArea--Error {
    border-bottom: 2px solid ${COLORS.BLUE_OCEAN_DARK};
  }
`;

const TextAreaErrorTextStyles = styled.div`
  color: ${COLORS.RED};
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

const TextAreaHelpTextStyles = styled.div`
  color: ${COLORS.GREY_MEDIUM};
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

export default TextArea;
