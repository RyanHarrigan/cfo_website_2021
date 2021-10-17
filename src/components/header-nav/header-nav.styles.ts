import {NavLink, Nav, Navbar} from "react-bootstrap";
import styled from "@emotion/styled";
import {css} from "@emotion/react";

export const NavbarStyled = styled(Navbar)``;
export const NavStyled = styled(Nav)`
  width: 100%;
  max-width: 20em;
`;
export const NavLinkStyles = css`
  text-transform: uppercase;
  color: var(--bs-gray-300);
`
export const LogoStyled = styled.img`
  padding: 0 0 0.5em;
  height: 100%;
  width: auto;
  max-height: 5em;
`;
