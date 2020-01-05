import React from 'react';
import styled from 'styled-components';
import { boxShadowInsetPressed } from '../../../../styles/shared';
import { borderRadiusRound } from '../../../../styles/shared';
import { COLORS } from '../../../../constants/colors';

interface ToggleButtonProps {
  children: string;
  className?: string;
  id: string;
  checked: boolean;
  tabIndex: number;
  dataValue: string;
}

interface ToggleButtonStylesProps {
  readonly checked: boolean;
  readonly tabIndex: number;
}

const ToggleButton = React.forwardRef(
  (props: ToggleButtonProps, ref: React.Ref<HTMLSpanElement>) => {
    const { children, className, id, checked, tabIndex, dataValue } = props;

    return (
      <ToggleButtonStyles
        className={className}
        id={id}
        role='radio'
        aria-checked={checked}
        checked={checked}
        tabIndex={tabIndex}
        ref={ref}
        data-value={dataValue}
      >
        {children}
      </ToggleButtonStyles>
    );
  },
);

const ToggleButtonStyles = styled.span<ToggleButtonStylesProps>`
  border: none;
  border-radius: ${borderRadiusRound};
  background: ${(props) =>
    props['aria-checked'] ? COLORS.GREY_LIGHT : COLORS.WHITE};
  border: 1px solid ${COLORS.GREY_SHADOW};
  box-shadow: ${(props) =>
    props['aria-checked'] ? boxShadowInsetPressed : 'none'};
  ${(props) => (props['aria-checked'] ? 'text-shadow: 1px 1px #fff' : null)};
  cursor: pointer;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.07rem;
  margin: 0 0.5rem 0 0;
  padding: 0.75rem 1rem;

  &:active {
    box-shadow: ${(props) =>
      props['aria-checked'] ? boxShadowInsetPressed : 'none'};
  }

  &.ToggleButton--Error {
    border-bottom: 2px solid ${COLORS.BLUE_OCEAN_DARK};
  }
`;

export default ToggleButton;
