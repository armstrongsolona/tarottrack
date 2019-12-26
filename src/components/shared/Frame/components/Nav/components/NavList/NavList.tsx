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
import NavLink from '../NavLink/NavLink';
import { ROUTES } from '../../../../../../../constants/routes';
import { COLORS } from '../../../../../../../constants/colors';
import { BREAKPOINTS } from '../../../../../../../constants/breakpoints';

interface NavListProps {
  inverseColors?: boolean;
  onClick?(): void;
}

const NavList = (props: NavListProps) => {
  const { inverseColors = false, onClick } = props;

  return (
    <NavListStyles>
      <Link to={ROUTES.READINGS_NEW} className='Nav--New-Reading'>
        <NavLink
          icon={<FontAwesomeIcon icon={faPlus} color={COLORS.BLACK} />}
          inverseColors={inverseColors}
        >
          New reading
        </NavLink>
      </Link>
      <Link to={ROUTES.READINGS}>
        <NavLink
          icon={<FontAwesomeIcon icon={faFileAlt} color={COLORS.BLACK} />}
          inverseColors={inverseColors}
        >
          Saved readings
        </NavLink>
      </Link>
      <Link to={ROUTES.SPREADS}>
        <NavLink
          icon={<FontAwesomeIcon icon={faClone} color={COLORS.BLACK} />}
          inverseColors={inverseColors}
        >
          Spreads
        </NavLink>
      </Link>
      <Link to={ROUTES.CARDS_MEANINGS}>
        <NavLink
          icon={<FontAwesomeIcon icon={faBookOpen} color={COLORS.BLACK} />}
          inverseColors={inverseColors}
        >
          Card meanings
        </NavLink>
      </Link>
    </NavListStyles>
  );
};

const NavListStyles = styled.ul`
  margin: 0;
  padding: 0;

  @media screen and (min-width: ${BREAKPOINTS.DESKTOP_MIN}px) {
    .Nav--New-Reading {
      display: none;
    }
  }
`;

export default NavList;
