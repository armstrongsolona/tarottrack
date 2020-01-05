import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';

interface ToggleButtonGroupProps {
  children: React.ReactNode;
  className: string;
  label?: string;
  id: string;
  error?: boolean;
  errorText?: string;
  helpText?: string;
  required?: boolean;
}

type Role = 'radiogroup' | 'checkbox';

const ToggleButtonGroup = (props: ToggleButtonGroupProps) => {
  const {
    children,
    className,
    label,
    id,
    error,
    errorText,
    helpText,
    required,
  } = props;

  const subtextMarkup = error ? (
    <ToggleButtonGroupErrorTextStyles>
      {errorText}
    </ToggleButtonGroupErrorTextStyles>
  ) : (
    <ToggleButtonGroupHelpTextStyles>
      {helpText}
    </ToggleButtonGroupHelpTextStyles>
  );

  return (
    <div role='radiogroup' aria-labelledby={id} className={className}>
      <ToggleButtonGroupLabelStyles id={id}>
        {label}
      </ToggleButtonGroupLabelStyles>
      {!required && (
        <ToggleButtonGroupLabelOptionalStyles>
          {' '}
          (optional)
        </ToggleButtonGroupLabelOptionalStyles>
      )}
      <br />
      <ToggleButtonGroupStyles>{children}</ToggleButtonGroupStyles>
      <br />
      {subtextMarkup}
    </div>
  );
};

const ToggleButtonGroupLabelStyles = styled.h3`
  line-height: 2rem;

  &.ToggleButtonGroupLabel--Visually-Hidden {
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

const ToggleButtonGroupStyles = styled.div`
  display: flex;
`;

const ToggleButtonGroupLabelOptionalStyles = styled.span`
  color: ${COLORS.GREY_MEDIUM};
  font-size: 0.8rem;
`;

const ToggleButtonGroupErrorTextStyles = styled.div`
  color: ${COLORS.RED};
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

const ToggleButtonGroupHelpTextStyles = styled.div`
  color: ${COLORS.GREY_MEDIUM};
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

export default ToggleButtonGroup;
