import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import NavList from './components/NavList/NavList';
import Button from '../../../Button/Button';
import { NAV_PADDING_TOP, ONE_REM } from '../../constants';
import { ROUTES } from '../../../../../constants/routes';
import { COLORS } from '../../../../../constants/colors';
import { BREAKPOINTS } from '../../../../../constants/breakpoints';

const Nav = () => {
  return (
    <NavStyles>
      <Link to={ROUTES.READINGS_NEW}>
        <NavButtonStyles>
          <Button
            type='primary'
            icon={<FontAwesomeIcon icon={faPlus} />}
            id='New-Reading'
          >
            New reading
          </Button>
        </NavButtonStyles>
      </Link>

      <NavList />
    </NavStyles>
  );
};

const NavStyles = styled.nav`
  background: ${COLORS.GREY_LIGHTER};
  border-right: 1px solid ${COLORS.GREY_LIGHT};
  height: calc(100% - ${NAV_PADDING_TOP * ONE_REM}px);

  @media screen and (max-width: ${BREAKPOINTS.TABLET_MAX}px) {
    display: none;
  }

  @media screen and (min-width: ${BREAKPOINTS.DESKTOP_MIN}px) {
    min-width: 12rem;
  }
`;

const NavButtonStyles = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;

  @media screen and (max-width: ${BREAKPOINTS.TABLET_MAX}px) {
    display: none;
  }
`;

export default Nav;
