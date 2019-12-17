import React from 'react';
import styled from 'styled-components';
import Avatar from '../../../Avatar/Avatar';
import { COLORS } from '../../../../../constants/colors';

interface AppBarTopProps {
  logo: React.ReactNode;
  accountMenu: React.ReactNode;
  mobileMenu: React.ReactNode;
  userImgSrc?: string;
  userInitials?: string;
  username: string;
}

const AppBarTop = (props: AppBarTopProps) => {
  const { logo, mobileMenu, userImgSrc, userInitials, username } = props;

  return (
    <AppBarTopStyles>
      <AppBarTopInnerStyles>
        {logo}
        <div>
          <Avatar
            initials={userInitials}
            imgSrc={userImgSrc}
            username={username}
          />
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
