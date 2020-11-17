import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const Places = () => {
  const [value, setValue] = useState(null);

  console.log("value", value);

  return (
    <>
      <GooglePlacesAutocomplete
        placeholder="Type in an address"
        inputStyle={{
          height: 40,
          fontSize: 28,
        }}
        // selectProps={{
        //   getOptionLabel: (option) => console.log(option),
        // }}
        selectProps={{
          value,
          onChange: setValue,
        }}
        onLoadFailed={(error) =>
          console.error("========== Could not inject Google script", error)
        }
      />
    </>
  );
};

export default Places;
