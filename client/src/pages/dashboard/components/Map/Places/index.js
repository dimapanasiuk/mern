import React, { useState, useEffect } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import axios from "axios";

// work with this key
// https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJk1uS2eG7FkgRqzCcF1iDSMY&fields=name,rating,geometry,formatted_phone_number&key=AIzaSyCuMJ3dhADqNoE4tGuWTI3_NlwBihj5BtE

const request =
  "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJk1uS2eG7FkgRqzCcF1iDSMY&fields=name,rating,geometry,formatted_phone_number&key=AIzaSyCuMJ3dhADqNoE4tGuWTI3_NlwBihj5BtE";

const Places = () => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    axios
      .get(request)
      .then((data) => console.log(data.data))
      .catch((e) => console.warn("💡🛑", e));
  }, [value]);

  return (
    <>
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
    </>
  );
};

export default Places;
