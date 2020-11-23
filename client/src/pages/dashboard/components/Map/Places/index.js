import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
// eslint-disable-next-line import/no-unresolved
import getPlaceId from "store/getPlaceData/actions"; // TODO : fix this problem

import { Div } from "./style";

const Places = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

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
          placeholder="Type in an address"
          inputStyle={{
            height: 40,
            fontSize: 28,
          }}
          selectProps={{
            value,
            onChange: setValue,
          }}
          onLoadFailed={(e) => console.warn("💡🛑", e)}
        />
      </Div>
    </>
  );
};

export default connect()(Places);