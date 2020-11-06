import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Button, FormGroup, Label, Input as StrapInput } from "reactstrap";

const Registration = () => {
  const { register, handleSubmit, errors } = useForm();

  const submitHandler = (requestData) => {
    const { password, password2 } = requestData;
    if (password === password2) {
      axios
        .post("/registration", requestData)
        .then((response) => {
          console.log("response", response.data);
          if (response.data === "err") {
            console.log("not work validate in the server");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const STR = "please enter";

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <FormGroup>
        <Label for="login">Login</Label>
        <StrapInput
          id="login"
          placeholder={`${STR} login`}
          name="userName"
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
            minLength: {
              value: 5,
              message: "error message min", // <p>error message</p>
            },
          })}
        />

        {errors.password && <span>This field is required</span>}
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <StrapInput
          placeholder={`${STR} password`}
          name="password2"
          type="password"
          innerRef={register({
            required: true,
            minLength: {
              value: 5,
              message: "error message min", // <p>error message</p>
            },
          })}
        />

        {errors.password && <span>This field is required</span>}
      </FormGroup>
      <Button type="submit"> Submit</Button>
    </form>
  );
};

export default Registration;
