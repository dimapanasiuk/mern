import React, { useState } from "react";
import axios from "axios";
import { object } from "prop-types";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button, FormGroup, Label, Input as StrapInput } from "reactstrap";
import LoginHeader from "components/LoginHeader";
import ModalRegistration from "components/Modal";
import { DivS } from "./style";

const Registration = ({ userData }) => {
  const { t } = useTranslation();
  const { register, handleSubmit, errors } = useForm();

  const registrationTextSuccess = t("Registration");
  const  registrationTextUnSuccess = t("RegistrationUnSuccess");

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationText, setRegistrationText] = useState(registrationTextSuccess);


  const submitHandler = (requestData) => {
    const { password, password2 } = requestData;
    if (password === password2) {
      axios
        .post("/registration", requestData)
        .then(data => {
          if(data) {
            setRegistrationSuccess(true);
            registrationText(registrationTextSuccess);
          }
        })
        .catch(err => {
          if(err) {
            setRegistrationSuccess(false);
            setRegistrationText(registrationTextUnSuccess);
          } 
      });
    }
  };

  const STR = "please enter";

  return (
    <DivS>
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
      <ModalRegistration isOpen={registrationSuccess}  text={registrationText}/>
    </DivS>
  );
};

Registration.propTypes = {
  userData: object
};

export default Registration;
