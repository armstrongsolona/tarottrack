import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavLink from '../NavLink/NavLink';
import { ROUTES } from '../../../../../../../constants/routes';
import { COLORS } from '../../../../../../../constants/colors';

interface NavAccountListProps {
  onClick?(): void;
}

const NavAccountList = (props: NavAccountListProps) => {
  const { onClick } = props;

  return (
    <NavAccountListStyles>
      <Link
        to={ROUTES.READINGS_NEW}
        className='Nav--My-Account'
        onClick={onClick}
      >
        <NavLink inverseColors>My account</NavLink>
      </Link>
      <Link
        to={ROUTES.READINGS_NEW}
        className='Nav--Settings'
        onClick={onClick}
      >
        <NavLink inverseColors>Settings</NavLink>
      </Link>
      <NavAccountListSeparator />
      <Link to={ROUTES.READINGS_NEW} className='Nav--Logout' onClick={onClick}>
        <NavLink inverseColors>Log out</NavLink>
      </Link>
    </NavAccountListStyles>
  );
};

const NavAccountListStyles = styled.ul`
  border-top: 1px solid ${COLORS.GREY_LIGHT};
  margin: 0;
  padding: 0;
`;

const NavAccountListSeparator = styled.div`
  border-top: 1px solid ${COLORS.GREY_LIGHT};
  height: 1px;
  width: 100%;
`;

export default NavAccountList;
