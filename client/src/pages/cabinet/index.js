import React, { useEffect, useState } from "react";
import { Button } from 'reactstrap'
import axios from "axios";
import theme from 'style/theme';
import { A } from './style';

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
    <>
      <p>
        ID: {user[ID]}
        <br />
        Username: {user.name}
        <br />
        Password: {user.password} <br />
      </p>
      <Button color={theme.danger}>
        <A href="/" onClick={logOutHandler}>Log out</A>
      </Button>
    </>
  );
};

export default Cabinet;
