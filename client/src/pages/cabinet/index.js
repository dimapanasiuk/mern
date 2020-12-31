import React, { useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line import/no-unresolved
import LoginHeader from 'components/LoginHeader';
import { object } from "prop-types";

const Cabinet = ({ userData }) => {
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
      .then(() => setUser(""))
      .catch(console.error);
  };

  const ID = "_id";

  return (
    <>
      <LoginHeader userData={userData} />

      <p>
        ID: {user[ID]}
        <br />
        Username: {user.name}
        <br />
        Password: {user.password} <br />
      </p>
      <a href="/logout" onClick={logOutHandler}>
        Log out
      </a>
    </>
  );
};

Cabinet.propTypes = {
  userData: object
}

export default Cabinet;
