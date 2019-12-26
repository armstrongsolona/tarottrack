import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSimCard } from '@fortawesome/free-solid-svg-icons';
import NavDesktop from '../Nav/components/NavDesktop/NavDesktop';
import NavMobile from '../Nav/components/NavMobile/NavMobile';
import { APP_BAR_TOP_HEIGHT } from '../../constants';
import { COLORS } from '../../../../../constants/colors';

const AppBarTop = () => {
  return (
    <AppBarTopStyles>
      <AppBarTopInnerStyles>
        <FontAwesomeIcon icon={faSimCard} />
        <span>
          <NavDesktop />
          <NavMobile />
        </span>
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
