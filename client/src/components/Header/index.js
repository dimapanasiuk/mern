import React from "react";
import { NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

import { NavigationBar, DivFlex, NavFlex } from "./style";
import "./style.css";

const Header = () => {
  return (
    <NavigationBar color="dark" light expand="md">
      <NavFlex className="mr-auto" navbar>
        <DivFlex>
          <NavItem>
            <NavLink
              to="/home"
              className="link-nav"
              activeClassName="active-route"
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/dashboard"
              className="link-nav"
              activeClassName="active-route"
            >
              Dashboard
            </NavLink>
          </NavItem>
        </DivFlex>
        <NavItem>
          <NavLink
            to="/login"
            className="link-nav"
            activeClassName="active-route"
          >
            Login
          </NavLink>
        </NavItem>
      </NavFlex>
    </NavigationBar>
  );
};

export default Header;
