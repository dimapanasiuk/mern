import { Nav } from "reactstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const RouterLink = styled(Link)`
  color: white;
  margin-right: 10px;
  text-decoration: none;

  :hover {
    color: red;
  }
`;

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
