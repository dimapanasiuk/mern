import React from "react";
import { Collapse, Navbar, NavItem } from "reactstrap";

import { RouterLink, DivFlex, NavFlex } from "./style";

const Header = () => {
  return (
    <div>
      <Navbar color="dark" light expand="md">
        <Collapse navbar>
          <NavFlex className="mr-auto" navbar>
            <DivFlex>
              <RouterLink to="/">Home</RouterLink>
              <NavItem>
                <RouterLink to="/dashboard">Dashboard</RouterLink>
              </NavItem>
            </DivFlex>
            <NavItem>
              <RouterLink to="/login">Login</RouterLink>
            </NavItem>
          </NavFlex>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
