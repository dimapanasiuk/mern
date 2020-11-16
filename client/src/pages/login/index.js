import React from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import Login from "./components/Login";

const LoginPage = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem active>
          <NavLink exact to="/profile">
            Profile
          </NavLink>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <NavLink exact to="/registration">
            Registration
          </NavLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Login />
    </>
  );
};

export default LoginPage;
