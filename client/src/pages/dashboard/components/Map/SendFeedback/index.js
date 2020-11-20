import React, { useState, useEffect } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { useForm } from "react-hook-form";
import { connect, useDispatch } from "react-redux";
import { object, string } from "prop-types";
import { size } from "lodash";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line import/no-unresolved
import senMapFeedback from "store/sendMapFeedback/actions";
import Places from "../Places";
import { FormStyle } from "./style";

const SendFeedback = ({ id, label, locationData }) => {
  const { t } = useTranslation();

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const [isTexVal, setIsTextVal] = useState(true);
  const [isButton, setIsButton] = useState(true);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (id) setIsTextVal(false);
    if (desc) {
      const dataFeedback = { id, label, desc };

      dataFeedback.location = locationData;
      dispatch(senMapFeedback(dataFeedback));
    }
  }, [desc, id]);

  const submitHandler = (requestData) => {
    const { description } = requestData;
    setDesc(description);
  };

  const textAriaHandler = (e) => {
    return e.target.value && id ? setIsButton(false) : setIsButton(true);
  };

  return (
    <FormStyle onSubmit={handleSubmit(submitHandler)}>
      <FormGroup>
        <Label>{t("Please enter place")}</Label>
        <Places innerRef={register} />
      </FormGroup>
      <FormGroup style={{ height: "100%" }}>
        <Label>{t("Write description")}</Label>
        <Input
          disabled={isTexVal}
          type="textarea"
          name="description"
          innerRef={register}
          onChange={textAriaHandler}
        />
      </FormGroup>
      <Button disabled={isButton} color="success">
        {t("Save")}
      </Button>
    </FormStyle>
  );
};

SendFeedback.propTypes = {
  id: string,
  label: string,
  locationData: object,
};

const mapStateToProps = (state) => {
  const len = size(state.getPlaceDataReducer) - 1;

  const result = state.getPlaceDataReducer[len];

  return result || { id: "", label: "" };
};

export default connect(mapStateToProps)(SendFeedback);
