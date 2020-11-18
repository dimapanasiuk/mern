import React from "react";
import { connect } from "react-redux";
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

const mapStateToProps = (state) => {
  console.log("MyMap", state.getPlaceIdReducer);
  return state.getPlaceIdReducer;
};

export default connect(mapStateToProps)(MyMap);
