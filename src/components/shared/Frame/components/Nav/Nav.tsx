import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faClone,
  faBookOpen,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../../Button/Button';
import NavLink from './components/NavLink/NavLink';
import { NAV_PADDING_TOP, ONE_REM } from '../../constants';
import { ROUTES } from '../../../../../constants/routes';
import { COLORS } from '../../../../../constants/colors';
import { BREAKPOINTS } from '../../../../../constants/breakpoints';

interface NavProps {
  children: React.ReactNode;
}

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

      <NavListStyles>
        <Link to={ROUTES.READINGS_NEW} className='Nav--New-Reading'>
          <NavLink
            icon={<FontAwesomeIcon icon={faPlus} color={COLORS.BLACK} />}
          >
            New reading
          </NavLink>
        </Link>
        <Link to={ROUTES.READINGS}>
          <NavLink
            icon={<FontAwesomeIcon icon={faFileAlt} color={COLORS.BLACK} />}
          >
            Saved readings
          </NavLink>
        </Link>
        <Link to={ROUTES.SPREADS}>
          <NavLink
            icon={<FontAwesomeIcon icon={faClone} color={COLORS.BLACK} />}
          >
            Spreads
          </NavLink>
        </Link>
        <Link to={ROUTES.CARDS_MEANINGS}>
          <NavLink
            icon={<FontAwesomeIcon icon={faBookOpen} color={COLORS.BLACK} />}
          >
            Card meanings
          </NavLink>
        </Link>
      </NavListStyles>
    </NavStyles>
  );
};

const NavStyles = styled.nav`
  background: ${COLORS.GREY_LIGHTER};
  border-right: 1px solid ${COLORS.GREY_LIGHT};
  height: calc(100% - ${NAV_PADDING_TOP * ONE_REM}px);

  @media screen and (max-width: ${BREAKPOINTS.TABLET_MAX}px) {
    border-bottom: 1px solid ${COLORS.GREY_LIGHT};
    height: auto;
    width: 100%;
  }

  @media screen and (min-width: ${BREAKPOINTS.DESKTOP_MIN}px) {
    min-width: 12rem;
  }
`;

const NavButtonStyles = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;

  @media screen and (max-width: ${BREAKPOINTS.TABLET_MAX}px) {
    display: none;
  }
`;

const NavListStyles = styled.ul`
  margin: 1rem 0 0 0;
  padding: 0;

  @media screen and (max-width: ${BREAKPOINTS.TABLET_MAX}px) {
    display: flex;
    justify-content: space-between;
    margin: 0;
  }

  @media screen and (min-width: ${BREAKPOINTS.DESKTOP_MIN}px) {
    .Nav--New-Reading {
      display: none;
    }
  }
`;

export default Nav;
