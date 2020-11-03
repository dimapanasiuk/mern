import React, { useEffect, useState } from "react";
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
      {userData()}
    </>
  );
};

export default Home;
