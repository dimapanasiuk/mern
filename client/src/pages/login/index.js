import React from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import styled from "styled-components";

import Login from "./components/Login";

const BreadcrumbS = styled(Breadcrumb)`
  margin: 10px 0 0 0;
`;

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
