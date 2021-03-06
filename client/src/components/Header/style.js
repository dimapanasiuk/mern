import { Nav, Navbar } from "reactstrap";
import styled from "styled-components";

export const DivFlex = styled.div`
  display: fLex;
  align-items: center;
`;

export const NavFlex = styled(Nav)`
  display: fLex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px;
`;

export const NavigationBar = styled(Navbar)`
  position: fixed;
  width: 100%;
  padding: 0 20px;
  z-index: 999999;
`;
