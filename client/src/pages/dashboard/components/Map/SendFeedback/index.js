import React, { useState, useEffect } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { connect, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { object, string } from "prop-types";
import { useForm } from "react-hook-form";
import { size } from "lodash";
import axios from "axios";

import senMapFeedback from "store/sendMapFeedback/actions";
import { FormStyle, FormGroupS } from "./style";
import Places from "../Places";

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

    const isTrue = !value && id;
    return setIsButton(isTrue);
  };

  const saveHandler = () => {
    const dataFeedback = { id, label, desc: texVal };

    if (locationData && id) {
      dataFeedback.location = locationData;

      axios
        .put("/saveMap", { mapData: dataFeedback })
        .then(console.log)
        .catch((error) => {
          console.log(error);
        });

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
