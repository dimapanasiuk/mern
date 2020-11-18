import React from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";

import Places from "../Places";
import { FormStyle } from "./style";

const SendFeedback = () => {
  return (
    <FormStyle>
      <FormGroup>
        <Label>Please enter place</Label>
        <Places />
      </FormGroup>
      <FormGroup style={{ height: "100%" }}>
        <Label for="exampleText">Write description</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <Button>Submit</Button>
    </FormStyle>
  );
};

export default SendFeedback;
