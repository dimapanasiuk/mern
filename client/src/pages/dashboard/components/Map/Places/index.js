import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useTranslation } from "react-i18next";

import getPlaceId from "store/getPlaceData/actions";

import { Div } from "./style";

const Places = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const onLoadFailed = (e) => {
    console.warn("💡🛑", e);
  };

  useEffect(() => {
    if (value) {
      const {
        label,
        // eslint-disable-next-line camelcase
        value: { place_id },
      } = value;

      dispatch(getPlaceId(place_id, label));
    }
  }, [value]);

  return (
    <>
      <Div>
        <GooglePlacesAutocomplete
          placeholder={t("Type in an address")}
          inputStyle={{
            height: 40,
            fontSize: 28,
          }}
          selectProps={{
            value,
            onChange: setValue,
          }}
          onLoadFailed={onLoadFailed}
        />
      </Div>
    </>
  );
};

export default connect()(Places);
