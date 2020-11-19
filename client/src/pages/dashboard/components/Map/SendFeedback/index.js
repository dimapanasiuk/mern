import React, { useEffect } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { string } from "prop-types";
import { size } from "lodash";

import Places from "../Places";
import { FormStyle } from "./style";

const SendFeedback = ({ id, label }) => {
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    console.log("id", id);
    console.log("city", label);
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
  label: string,
};

const mapStateToProps = (state) => {
  const len = size(state.getPlaceDataReducer) - 1;

  const result = state.getPlaceDataReducer[len];

  return result || { id: "", label: "" };
};

export default connect(mapStateToProps)(SendFeedback);
