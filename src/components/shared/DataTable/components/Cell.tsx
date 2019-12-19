import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../../constants/colors';

interface CellProps {
  children: React.ReactNode;
}

const Cell = (props: CellProps) => {
  const { children } = props;

  return <CellStyles>{children}</CellStyles>;
};

const CellStyles = styled.td`
  border: 1px solid ${COLORS.GREY_LIGHT};
  border-collapse: collapse;
  padding: 0.5rem;
  text-align: left;
`;

export default Cell;
