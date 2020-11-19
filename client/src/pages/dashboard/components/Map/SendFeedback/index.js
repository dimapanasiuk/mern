import React from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { useForm } from "react-hook-form";

import Places from "../Places";
import { FormStyle } from "./style";

const SendFeedback = () => {
  const { register, handleSubmit } = useForm();

  const submitHandler = (requestData) => {
    console.log("requestData", requestData);
  };

  return (
    <FormStyle onSubmit={handleSubmit(submitHandler)}>
      <FormGroup>
        <Label>Please enter place</Label>
        <Places innerRef={register} />
      </FormGroup>
      <FormGroup style={{ height: "100%" }}>
        <Label>Write description</Label>
        <Input type="textarea" name="description" innerRef={register} />
      </FormGroup>
      <Button>Submit</Button>
    </FormStyle>
  );
};

export default SendFeedback;
