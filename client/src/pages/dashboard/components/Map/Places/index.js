import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
// eslint-disable-next-line import/no-unresolved
import getPlaceId from "store/getPlaceId/actions"; // TODO : fix this problem

import { Div } from "./style";

// work with this key
// https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJk1uS2eG7FkgRqzCcF1iDSMY&fields=name,rating,geometry,formatted_phone_number&key=AIzaSyCuMJ3dhADqNoE4tGuWTI3_NlwBihj5BtE

//  "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJk1uS2eG7FkgRqzCcF1iDSMY&fields=name,rating,geometry,formatted_phone_number&key=AIzaSyCuMJ3dhADqNoE4tGuWTI3_NlwBihj5BtE";

const Places = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  useEffect(() => {
    if (value) {
      // eslint-disable-next-line camelcase
      const { place_id = "" } = value.value;
      dispatch(getPlaceId(place_id));
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
