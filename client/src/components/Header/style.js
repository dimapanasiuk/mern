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
`;

export const NavigationBar = styled(Navbar)`
  padding: 0 20px;
`;
