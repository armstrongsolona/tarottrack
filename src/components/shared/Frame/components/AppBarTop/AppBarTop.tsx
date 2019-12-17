import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../../../constants/colors';

interface AppBarTopProps {
  logo: React.ReactNode;
  accountMenu: React.ReactNode;
  mobileMenu: React.ReactNode;
}

const AppBarTop = (props: AppBarTopProps) => {
  const { logo, accountMenu, mobileMenu } = props;

  return (
    <AppBarTopStyles>
      <AppBarTopInnerStyles>
        {logo}
        <div>
          {accountMenu}
          {mobileMenu}
        </div>
      </AppBarTopInnerStyles>
    </AppBarTopStyles>
  );
};

const AppBarTopStyles = styled.header`
  background: ${COLORS.GREY_TOP_BAR};
  border-bottom: 1px solid ${COLORS.GREY_LIGHT};
  width: 100%;
`;

const AppBarTopInnerStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 75rem;
  padding: 1.5rem;
`;

export default AppBarTop;
