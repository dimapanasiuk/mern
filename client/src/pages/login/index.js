import React from "react";
import { NavLink } from "react-router-dom";
import { BreadcrumbItem } from "reactstrap";

import Login from "./components/Login";
import { BreadcrumbS } from './style';

const LoginPage = () => {
  return (
    <>
      <BreadcrumbS>
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
      </BreadcrumbS>
      <Login />
    </>
  );
};

export default LoginPage;
