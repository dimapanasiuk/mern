import React from "react";
import { object } from "prop-types";
import { has } from "lodash";
import { BreadcrumbItem } from "reactstrap";
import { NavLink } from "react-router-dom";

import { BreadcrumbS } from "./style";

const LoginHeader = ({ userData }) => {

  const userLoggedIn = has(userData, "name");
  return (
    <BreadcrumbS>
      <BreadcrumbItem >
        <NavLink exact to="/login-page">
          Login
      </NavLink>
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <NavLink exact to="/registration">
          Registration
      </NavLink>
      </BreadcrumbItem>
      <BreadcrumbItem active>
        {userLoggedIn && <NavLink exact to="/profile">
          Profile
      </NavLink>}
      </BreadcrumbItem>
    </BreadcrumbS>
  )
}

LoginHeader.propTypes = {
  userData: object
}

export default LoginHeader;