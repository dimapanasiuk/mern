import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Button, FormGroup, Label, Input as StrapInput } from "reactstrap";

import LoginHeader from 'components/LoginHeader';
import { object } from "prop-types";

const Registration = ({ userData }) => {
  const { register, handleSubmit, errors } = useForm();

  const submitHandler = (requestData) => {
    const { password, password2 } = requestData;
    if (password === password2) {
      axios
        .post("/registration", requestData)
        .catch(console.error);
    }
  };

  const STR = "please enter";

  return (
    <>
      <LoginHeader userData={userData} />
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
              },
            })}
          />
          {errors.password && <span>This field is required</span>}
        </FormGroup>
        <Button type="submit"> Submit</Button>
      </form>
    </>
  );
};

Registration.propTypes = {
  userData: object
}

export default Registration;
