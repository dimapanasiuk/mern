import React, { useEffect } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { string } from "prop-types";

import Places from "../Places";
import { FormStyle } from "./style";

const SendFeedback = ({ id }) => {
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    console.log("id", id);
  }, [id]);

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

SendFeedback.propTypes = {
  id: string,
};

const mapStateToProps = (state) => {
  return state.getPlaceIdReducer;
};

export default connect(mapStateToProps)(SendFeedback);
