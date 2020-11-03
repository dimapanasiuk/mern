import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

const RouterLink = styled(Link)`
  color: white;
  margin-right: 10px;
  text-decoration: none;

  :hover {
    color: red;
  }
`;

const Header = () => {
  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand>
          <RouterLink to="/">Home</RouterLink>
        </NavbarBrand>
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <RouterLink to="/login">Login</RouterLink>
            </NavItem>
            <NavItem>
              <RouterLink to="/registration">Registration</RouterLink>
            </NavItem>
            <NavItem>
              <RouterLink to="/cabinet">Cabinet</RouterLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
