import React, { useEffect, useState } from "react";
import axios from "axios";
import theme from "style/theme";
import { A, DivS, DivFlex, ButtonLogout } from "./style";

const Cabinet = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get("/home")
      .then((response) => setUser(response.data.user))
      .catch(console.error);
  }, []);

  const logOutHandler = () => {
    axios
      .post("/logout")
      .then(() => { setUser(""); }
      )
      .catch(console.error);
  };

  const ID = "_id";

  return (
    <DivS>
      <DivFlex>
        <h1>ID </h1>&nbsp;
        <h4>:{user[ID]}</h4>
      </DivFlex>
      <DivFlex>
        <h1>Username </h1>&nbsp;
        <h4>:{user.name}</h4>
      </DivFlex>
      <DivFlex>
        <h1>Password</h1>&nbsp;
        <h4>:{user.password}</h4>
      </DivFlex>
      <ButtonLogout color={theme.danger}>
        <A href="/" onClick={logOutHandler}>Log out</A>
      </ButtonLogout>
    </DivS>
  );
};

export default Cabinet;
