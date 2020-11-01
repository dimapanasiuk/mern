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

  return (
    <>
      <p>
        ID: {user.id}
        <br />
        Username: {user.username}
        <br />
        Name: {user.displayName} <br />
      </p>
      <a href="/logout" onClick={logOutHandler}>
        Log out
      </a>
    </>
  );
};

export default Cabinet;
