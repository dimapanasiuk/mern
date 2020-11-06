import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Button, FormGroup, Label, Input as StrapInput } from "reactstrap";

const Registration = () => {
  const { register, handleSubmit, errors } = useForm();

  const submitHandler = (requestData) => {
    axios
      .post("/", requestData)
      .then((response) => {
        console.log("response", response.data);
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
          name="userName"
          innerRef={register}
        />
      </FormGroup>
      <FormGroup>
        <Label for="pas">Password</Label>
        <StrapInput
          id="pas"
          placeholder={`${STR} password`}
          name="password"
          innerRef={register({ required: true })}
        />

        {errors.password && <span>This field is required</span>}
      </FormGroup>
      <Button type="submit"> Submit</Button>
    </form>
  );
};

export default Registration;
