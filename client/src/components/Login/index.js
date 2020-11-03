import React from "react";

const Login = () => {
  return (
    <>
      <form action="/login" method="post">
        <div>
          <p>Username:</p>
          <input type="text" name="username" />
          <br />
        </div>
        <div>
          <p>Password:</p>
          <input type="password" name="password" />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
};

export default Login;
