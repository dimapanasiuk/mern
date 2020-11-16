import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from "classnames";
import { string } from "prop-types";
import "./style.css";

const Navigation = ({ activeTab }) => {
  return (
    <Nav tabs>
      <NavItem>
        <NavLink className={classnames({ active: activeTab === "1" })}>
          Step 1
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={classnames({ active: activeTab === "2" })}>
          Step 2
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={classnames({ active: activeTab === "3" })}>
          Step 3
        </NavLink>
      </NavItem>
    </Nav>
  );
};

Navigation.propTypes = {
  activeTab: string,
};

export default Navigation;
