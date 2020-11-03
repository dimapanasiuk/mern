import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("/registration", { user: "test" })
      .then((response) => {
        console.log("response", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>
        Registration {userName} / {password}
      </h1>
      <form action="/registration" method="post" onSubmit={submitHandler}>
        <div>
          <p>Username:</p>
          <input
            type="text"
            name="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
        </div>
        <div>
          <p>Password:</p>
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
