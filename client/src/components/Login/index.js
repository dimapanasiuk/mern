import React from "react";

const Login = () => {
  //   const formSubmitHandler = (e) => {
  //     e.preventDefault();
  //     console.log(e.target);
  //   };

  return (
    <>
      <form
        action="/login"
        //   onSubmit={formSubmitHandler}
        method="post"
      >
        <div>
          <label>Username:</label>
          <input type="text" name="username" />
          <br />
        </div>
        <div>
          <label>Password:</label>
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
