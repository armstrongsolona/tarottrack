import React from 'react';
import styled from 'styled-components';
import { borderRadiusCircle } from '../../../styles/shared';
import { COLORS } from '../../../constants/colors';

interface AvatarProps {
  imgSrc?: string;
  initials?: string;
  username: string;
}

const Avatar = (props: AvatarProps) => {
  const { imgSrc, initials, username } = props;

  const ariaLabel = `Account and settings menu for ${username}`;

  const markup = imgSrc ? (
    <AvatarImageStyles src={imgSrc} alt='' role='presentation' />
  ) : (
    <AvatarInitialsStyles>{initials}</AvatarInitialsStyles>
  );

  return (
    <AvatarStyles aria-label={ariaLabel} role='img'>
      {markup}
    </AvatarStyles>
  );
};

const AvatarStyles = styled.span`
  border-radius: ${borderRadiusCircle};
  cursor: pointer;
  height: 2rem;
  width: 2rem;
`;

const AvatarImageStyles = styled.img`
  border-radius: ${borderRadiusCircle};
`;

const AvatarInitialsStyles = styled.span`
  align-items: center;
  border: 2px solid ${COLORS.GREY_DARK};
  border-radius: ${borderRadiusCircle};
  display: flex;
  height: 2rem;
  width: 2rem;

  justify-content: center;
`;

export default Avatar;
