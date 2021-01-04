import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
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

  const userData = () => {
    if (!user) {
      return (
        <h4>
          Please <Link to="/login-page">log in</Link >.
        </h4>
      );
    } else {
      return (
        <h4>
          Hello, <b>{user.name}.</b> View your <Link to="/profile">profile</Link >.
        </h4>
      );
    }
  };

  return (
    <>
      <h1>Welcome page</h1>
      {userData()}
    </>
  );
};

export default Home;
