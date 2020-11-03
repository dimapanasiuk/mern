import React, { useEffect, useState } from "react";

import { Button } from "reactstrap";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get("home")
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const userData = () => {
    console.log("----------------user", user);
    if (!user) {
      return (
        <p>
          Welcome! Please <a href="/login">log in</a>.
        </p>
      );
    } else {
      return (
        <p>
          Hello, {user.username}. View your <a href="/profile">profile</a>.
        </p>
      );
    }
  };

  return (
    <>
      <h1> Home</h1>
      <Button color="danger">Danger!</Button>
      {userData()}
    </>
  );
};

export default Home;
