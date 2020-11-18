import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Div } from "./style";

// work with this key
// https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJk1uS2eG7FkgRqzCcF1iDSMY&fields=name,rating,geometry,formatted_phone_number&key=AIzaSyCuMJ3dhADqNoE4tGuWTI3_NlwBihj5BtE

//  "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJk1uS2eG7FkgRqzCcF1iDSMY&fields=name,rating,geometry,formatted_phone_number&key=AIzaSyCuMJ3dhADqNoE4tGuWTI3_NlwBihj5BtE";

const Places = () => {
  const [value, setValue] = useState(null);

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

export default Places;
