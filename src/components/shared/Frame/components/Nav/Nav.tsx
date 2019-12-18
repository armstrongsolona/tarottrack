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
            id='new-reading'
          >
            New reading
          </Button>
        </NavButtonStyles>
      </Link>

      <NavListStyles>
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
  padding-top: 1.5rem;
  min-width: 12rem;
`;

const NavButtonStyles = styled.div`
  display: flex;
  justify-content: center;
`;

const NavListStyles = styled.ul`
  margin: 1rem 0 0 0;
  padding: 0;
`;

export default Nav;
