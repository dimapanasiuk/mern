import React, { useEffect, useState } from "react";
import axios from "axios";

const Cabinet = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get("/home")
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const logOutHandler = () => {
    axios
      .get("/logout")
      .then((response) => {
        console.log(response.data);
        setUser("");
      })
      .catch((error) => {
        console.log(error);
      });
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
      <a href="/logout" onClick={logOutHandler}>
        Log out
      </a>
    </>
  );
};

export default Cabinet;
