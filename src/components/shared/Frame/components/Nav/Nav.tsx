import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../Button/Button";
import Link from "./components/Link";
import { COLORS } from "../../../../../constants/colors";

interface NavProps {
  children: React.ReactNode;
}

const Nav = () => {
  return (
    <NavStyles>
      <NavButtonStyles>
        <Button type="primary" id="new-reading">
          New reading
        </Button>
      </NavButtonStyles>

      <NavListStyles>
        <Link>Saved readings</Link>
        <Link>Spreads</Link>
        <Link>Card meanings</Link>
      </NavListStyles>
    </NavStyles>
  );
};

const NavStyles = styled.nav`
  background: ${COLORS.WHITE};
  border-right: 1px solid ${COLORS.GREY_LIGHT};
  height: 100%;
  min-height: 100vh;
  padding-top: 1.5rem;
  width: 12rem;
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
