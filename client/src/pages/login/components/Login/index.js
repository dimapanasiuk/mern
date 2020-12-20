import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { connect, useDispatch } from "react-redux";
import { Button, FormGroup, Label, Input as StrapInput } from "reactstrap";

// eslint-disable-next-line import/no-unresolved
import getUserData from "store/login/actions";


const Login = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const submitHandler = (requestData) => {
    axios
      .post("/login", requestData)
      .then((response) => {
        const { data } = response;
        if (data) {
          dispatch(getUserData(data.user));
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
        <Label for="login">{t("Login")}</Label>
        <StrapInput
          id="login"
          placeholder={`${STR} login`}
          name="username"
          innerRef={register}
        />
      </FormGroup>
      <FormGroup>
        <Label>{t("Password")}</Label>
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

export default connect()(Login);
