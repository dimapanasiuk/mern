import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("/registration", { user: "test" })
      .then(function (response) {
        console.log("response", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Registration</h1>
      <form action="/registration" method="post" onSubmit={submitHandler}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
};

export default Registration;
