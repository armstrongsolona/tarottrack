import React from 'react';
import styled from 'styled-components';
import Avatar from '../../../../../Avatar/Avatar';
import { BREAKPOINTS } from '../../../../../../../constants/breakpoints';

interface NavDesktopProps {
  initials?: string;
  userImgSrc?: string;
  username?: string;
}

const NavDesktop = (props: NavDesktopProps) => {
  const { initials, userImgSrc, username = 'Username' } = props;

  return (
    <NavDesktopStyles>
      <Avatar imgSrc={userImgSrc} initials={initials} username={username} />
    </NavDesktopStyles>
  );
};

const NavDesktopStyles = styled.span`
  @media screen and (max-width: ${BREAKPOINTS.TABLET_MAX}px) {
    display: none;
  }
`;

export default NavDesktop;
