import React, { useEffect } from "react";
import axios from "axios";

import Login from "../../components/Login";

const LoginPage = () => {
  useEffect(() => {
    axios
      .get("https://statsapi.web.nhl.com/api/v1/teams")
      .then((response) => {
        console.log("--------------", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <Login />;
};

export default LoginPage;
