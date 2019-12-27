import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';

interface CheckboxGroupProps {
  children: React.ReactNode;
  label?: string;
  labelHidden?: boolean;
  error?: boolean;
  errorText?: string;
  helpText?: string;
  required?: boolean;
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const {
    children,
    label,
    labelHidden,
    error,
    errorText,
    helpText,
    required,
  } = props;

  const labelAsterisk = required && <LabelAsterisk>*</LabelAsterisk>;
  const labelOptional = !required && <LabelOptional> (optional)</LabelOptional>;

  const labelMarkup = labelHidden ? (
    <CheckboxGroupLabel className='CheckboxGroupLabel--Visually-Hidden'>
      {label}
    </CheckboxGroupLabel>
  ) : (
    <CheckboxGroupLabel>{label}</CheckboxGroupLabel>
  );

  const helpTextMarkup = error ? null : (
    <CheckboxGroupHelpTextStyles>{helpText}</CheckboxGroupHelpTextStyles>
  );
  const errorTextMarkup = error ? (
    <CheckboxGroupErrorTextStyles>{errorText}</CheckboxGroupErrorTextStyles>
  ) : null;

  return (
    <>
      {labelMarkup}
      {labelAsterisk}
      {labelOptional}
      <br />
      {children}
      <br />
      {helpTextMarkup}
      {errorTextMarkup}
    </>
  );
};

const CheckboxGroupLabel = styled.label`
  line-height: 2rem;

  &.CheckboxGroupLabel--Visually-Hidden {
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

const LabelAsterisk = styled.sup`
  font-size: 0.8rem;
`;

const LabelOptional = styled.span`
  color: ${COLORS.GREY_MEDIUM};
  font-size: 0.8rem;
`;

const CheckboxGroupErrorTextStyles = styled.div`
  color: ${COLORS.RED};
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

const CheckboxGroupHelpTextStyles = styled.div`
  color: ${COLORS.GREY_MEDIUM};
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

export default CheckboxGroup;
