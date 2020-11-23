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
import { FormStyle, FormGroupS } from "./style";

const SendFeedback = ({ id, label, locationData }) => {
  const { t } = useTranslation();

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const [texVal, setTextVal] = useState("");
  const [isTexVal, setIsTextVal] = useState(true);
  const [isButton, setIsButton] = useState(true);

  useEffect(() => {
    if (id) setIsTextVal(false);
  }, [id]);

  const textAriaHandler = (e) => {
    const { value } = e.target;
    setTextVal(value);

    // eslint-disable-next-line no-unneeded-ternary
    const isTrue = value && id ? false : true; // TODO: fix this warning
    return setIsButton(isTrue);
  };

  const saveHandler = () => {
    const dataFeedback = { id, label, desc: texVal };

    if (locationData && id) {
      dataFeedback.location = locationData;
      dispatch(senMapFeedback(dataFeedback));
    }
    setTextVal("");
    setIsTextVal(true);
    setIsButton(true);
  };

  return (
    <FormStyle onSubmit={handleSubmit()}>
      <FormGroup>
        <Label>{t("Please enter place")}</Label>
        <Places innerRef={register} />
      </FormGroup>
      <FormGroupS>
        <Label>{t("Write description")}</Label>
        <Input
          disabled={isTexVal}
          type="textarea"
          value={texVal}
          innerRef={register}
          onChange={textAriaHandler}
        />
      </FormGroupS>
      <Button disabled={isButton} color="success" onClick={saveHandler}>
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
