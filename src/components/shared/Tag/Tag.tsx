import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faHome,
  faFirstAid,
  faMoneyBillWave,
  faQuestionCircle,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons';
import { COLORS, TAG_COLORS } from '../../../constants/colors';

interface TagProps {
  type: TagType;
}

export type TagType =
  | 'general'
  | 'health'
  | 'home'
  | 'love'
  | 'money'
  | 'relationships';

export const TAG_COLOR = {
  general: TAG_COLORS.GREY,
  health: TAG_COLORS.RED,
  home: TAG_COLORS.YELLOW,
  love: TAG_COLORS.PINK,
  money: TAG_COLORS.GREEN,
  relationships: TAG_COLORS.BLUE,
};

export const TAG_ICON = {
  general: <FontAwesomeIcon icon={faQuestionCircle} />,
  health: <FontAwesomeIcon icon={faFirstAid} />,
  home: <FontAwesomeIcon icon={faHome} />,
  love: <FontAwesomeIcon icon={faHeart} />,
  money: <FontAwesomeIcon icon={faMoneyBillWave} />,
  relationships: <FontAwesomeIcon icon={faUserFriends} />,
};

const Tag = (props: TagProps) => {
  const { type } = props;

  return (
    <TagStyles color={TAG_COLOR[type]} type='button'>
      {TAG_ICON[type]}
    </TagStyles>
  );
};

const TagStyles = styled.button`
  align-items: center;
  background: ${({ color }) => color};
  border-radius: 3rem;
  border: none;
  color: ${COLORS.GREY_DARK}
  display: flex;
  font-size: 0.8rem;
  justify-content: center;
  margin-right: 0.75rem;
  padding: 0.25rem;
  width: 2.5rem;
`;

export default Tag;
