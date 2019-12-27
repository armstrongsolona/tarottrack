import React from 'react';
import styled from 'styled-components';

type Direction = 'row' | 'column';
type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between';
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch';

interface FlexProps {
  children: React.ReactNode;
  direction?: Direction;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
}

const Flex = (props: FlexProps) => {
  const { children } = props;

  return <FlexStyles>{children}</FlexStyles>;
};

const FlexStyles = styled.div`
  display: flex;
`;

export default Flex;
