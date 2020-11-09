import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Button, FormGroup, Label, Input as StrapInput } from "reactstrap";
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

import { ID } from "../../../../utils";
import enterCabinet from "../../../../store/login/action";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const submitHandler = (requestData) => {
    axios
      .post("/login", requestData)
      .then((response) => {
        if (response.data) {
          const id = response.data.user[ID];
          history.push("/");
          dispatch(enterCabinet(id));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const STR = "please enter";

  return (
    <>
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
    </>
  );
};

const mapDispatchToProps = (state) => {
  return {
    data: state.enterCabinetReducer,
  };
};

export default connect(mapDispatchToProps)(Login);
