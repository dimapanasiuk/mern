import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Button, FormGroup, Label, Input as StrapInput } from "reactstrap";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const submitHandler = (requestData) => {
    axios
      .post("/login", requestData)
      .then((response) => {
        if (response.data) {
          history.push("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const STR = "please enter";

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <FormGroup>
        <Label for="login">Login</Label>
        <StrapInput
          id="login"
          placeholder={`${STR} login`}
          name="username"
          innerRef={register}
        />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <StrapInput
          placeholder={`${STR} password`}
          name="password"
          type="password"
          innerRef={register({
            required: true,
            minLength: { value: 5 },
          })}
        />

        {errors.password && <span>This field is required</span>}
      </FormGroup>
      <Button type="submit"> Submit</Button>
    </form>
  );
};

export default Login;
