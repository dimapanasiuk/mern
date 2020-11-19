import React, { useState, useEffect } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { useForm } from "react-hook-form";
import { connect, useDispatch } from "react-redux";
import { string } from "prop-types";
import { size } from "lodash";

// eslint-disable-next-line import/no-unresolved
import senMapFeedback from "store/sendMapFeedback/actions";
import Places from "../Places";
import { FormStyle } from "./style";

const SendFeedback = ({ id, label }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const [desc, setDesc] = useState("");

  useEffect(() => {
    const dataFeedback = { id, label, desc };
    dispatch(senMapFeedback(dataFeedback));
  }, [desc]);

  const submitHandler = (requestData) => {
    const { description } = requestData;
    setDesc(description);
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
