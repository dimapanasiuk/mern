import React from "react";
import { object } from "prop-types";
import { has } from "lodash";

import Cabinet from "pages/cabinet";
import LoginHeader from 'components/LoginHeader';
import Login from "./components/Login";
import { DivContainer } from './style';

const LoginPage = ({ userData }) => {
  const userLoggedIn = has(userData, 'name');
  
  return (
    <DivContainer>

      {!userLoggedIn && <LoginHeader userData={userData} />}
      {!userLoggedIn && <Login userData={userData} />}
      {userLoggedIn && <Cabinet userData={userData} />}
    </DivContainer>
  );
};

LoginPage.propTypes = {
  userData: object
}

export default LoginPage;
