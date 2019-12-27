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
  error?: boolean;
  errorText?: string;
  helpText?: string;
  maxLength?: number;
  minLength?: number;
  rows?: number;
  cols?: number;
  required?: boolean;
  placeholder?: string;
  onChange?(value: string, id: string): void;
  onFocus?(): void;
  onBlur?(): void;
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
    } = this.props;

    const labelOptional = !required && (
      <LabelOptional> (optional)</LabelOptional>
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
    const borderColor = error ? COLORS.RED : COLORS.GREY_SHADOW;

    return (
      <>
        {labelMarkup}
        {labelOptional}
        <br />
        <TextAreaStyles
          id={id}
          name={name}
          disabled={disabled}
          color={borderColor}
          placeholder={placeholder}
          maxLength={maxLength}
          minLength={minLength}
          cols={cols}
          rows={rows}
          required={required}
        />
        <br />
        {helpTextMarkup}
        {errorTextMarkup}
      </>
    );
  }
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
  color: ${COLORS.GREY_MEDIUM};
  font-size: 0.8rem;
`;

const TextAreaStyles = styled.textarea`
  background: ${COLORS.WHITE};
  border: 1px solid ${({ color }) => color && color};
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
