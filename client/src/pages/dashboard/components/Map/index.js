import React from "react";
import GoogleMap from "./GoogleMap";
import LocationSearchInput from "./Places";

const MyMap = () => {
  return (
    <>
      <LocationSearchInput />
      <GoogleMap />
    </>
  );
};

export default MyMap;
