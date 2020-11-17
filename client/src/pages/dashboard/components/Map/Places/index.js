import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const Places = () => {
  return (
    <>
      <GooglePlacesAutocomplete
        placeholder="Type in an address"
        inputStyle={{
          height: 40,
          fontSize: 28,
        }}
      />
    </>
  );
};

export default Places;
