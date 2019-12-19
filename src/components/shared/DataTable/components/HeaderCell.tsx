import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../../constants/colors';

interface HeaderCellProps {
  children: React.ReactNode;
  scope: string;
}

const HeaderCell = (props: HeaderCellProps) => {
  const { children, scope } = props;

  return <HeaderCellStyles scope={scope}>{children}</HeaderCellStyles>;
};

const HeaderCellStyles = styled.th`
  border: 1px solid ${COLORS.GREY_LIGHT};
  border-collapse: collapse;
  padding: 0.5rem;
  text-align: left;
`;

export default HeaderCell;
