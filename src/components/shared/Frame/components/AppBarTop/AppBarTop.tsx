import React from 'react';
import styled from 'styled-components';
import Avatar from '../../../Avatar/Avatar';
import { APP_BAR_TOP_HEIGHT } from '../../constants';
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
  const { logo, userImgSrc, userInitials, username } = props;

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
        </div>
      </AppBarTopInnerStyles>
    </AppBarTopStyles>
  );
};

const AppBarTopStyles = styled.header`
  background: ${COLORS.GREY_TOP_BAR};
  border-bottom: 1px solid ${COLORS.GREY_LIGHT};
  height: ${APP_BAR_TOP_HEIGHT}rem;
  width: 100%;
`;

const AppBarTopInnerStyles = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  padding: 0 1rem;
  max-width: 75rem;
`;

export default AppBarTop;
