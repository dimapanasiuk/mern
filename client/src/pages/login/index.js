import React from "react";
import { object } from "prop-types";
import { has } from "lodash";

// eslint-disable-next-line import/no-unresolved
import Cabinet from "pages/cabinet";
// eslint-disable-next-line import/no-unresolved
import LoginHeader from 'components/LoginHeader';
import Login from "./components/Login";

const LoginPage = ({ userData }) => {

  const userLoggedIn = has(userData, 'name');

  return (
    <>
      {!userLoggedIn && <LoginHeader userData={userData} />}
      {!userLoggedIn && <Login userData={userData} />}
      {userLoggedIn && <Cabinet userData={userData} />}
    </>
  );
};

LoginPage.propTypes = {
  userData: object
}

export default LoginPage;
