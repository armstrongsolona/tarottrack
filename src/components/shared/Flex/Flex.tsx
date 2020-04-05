import React from 'react';
import styled from 'styled-components';

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type AlignContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'space-between'
  | 'space-around';
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch';

interface FlexProps {
  children: React.ReactNode;
  flexDirection?: FlexDirection;
  justifyContent?: JustifyContent;
  alignContent?: AlignContent;
  alignItems?: AlignItems;
}

const Flex = (props: FlexProps) => {
  const {
    children,
    flexDirection,
    justifyContent,
    alignContent,
    alignItems,
  } = props;

  return (
    <FlexStyles
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignContent={alignContent}
      alignItems={alignItems}
    >
      {children}
    </FlexStyles>
  );
};

const FlexStyles = styled.div<FlexProps>`
  display: flex;
  ${(props) => props.flexDirection && `flex-direction: ${props.flexDirection}`};
  ${(props) =>
    props.justifyContent && `justify-content: ${props.justifyContent}`};
  ${(props) => props.alignContent && `align-content: ${props.alignContent}`};
  ${(props) => props.alignItems && `align-items: ${props.alignItems}`};
`;

export default Flex;
