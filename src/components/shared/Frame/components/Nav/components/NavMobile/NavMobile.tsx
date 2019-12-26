import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavList from '../NavList/NavList';
import NavAccountList from '../NavAccountList/NavAccountList';
import NavMobileDrawer from './NavMobileDrawer';
import NavMobileUnderlay from './NavMobileUnderlay';
import { BREAKPOINTS } from '../../../../../../../constants/breakpoints';

interface NavMobileProps {}

interface NavMobileState {
  sliding: boolean;
}

class NavMobile extends React.Component<NavMobileProps, NavMobileState> {
  state: NavMobileState = {
    sliding: false,
  };

  render() {
    const { sliding } = this.state;

    return (
      <NavMobileStyles>
        <NavMobileDrawer sliding={sliding} stopSliding={this.stopSliding}>
          <NavList inverseColors onClick={this.stopSliding} />
          <NavAccountList onClick={this.stopSliding} />
        </NavMobileDrawer>
        <NavMobileUnderlay onClick={this.stopSliding} sliding={sliding} />
        <FontAwesomeIcon icon={faBars} onClick={this.startSliding} />
      </NavMobileStyles>
    );
  }

  startSliding = () => {
    this.setState({ sliding: true });
  };

  stopSliding = () => {
    this.setState({ sliding: false });
  };
}

const NavMobileStyles = styled.span`
  cursor: pointer;

  @media screen and (min-width: ${BREAKPOINTS.DESKTOP_MIN}px) {
    display: none;
  }
`;

export default NavMobile;
