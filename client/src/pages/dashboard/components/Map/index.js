import React, { useEffect } from "react";
import { connect } from "react-redux";
import { string } from "prop-types";
import axios from "axios";
import GoogleMap from "./GoogleMap";
import LocationSearchInput from "./Places";

const MyMap = ({ id }) => {
  useEffect(() => {
    const API_KEY = "AIzaSyCuMJ3dhADqNoE4tGuWTI3_NlwBihj5BtE";

    axios
      .post("/map", { placeId: id, API_KEY })
      .then((data) => console.log(data.data))
      .catch((e) => console.warn("💡🛑", e));
  }, [id]);

  return (
    <>
      <LocationSearchInput />
      <GoogleMap />
    </>
  );
};

MyMap.propTypes = {
  id: string,
};

const mapStateToProps = (state) => {
  return state.getPlaceIdReducer;
};

export default connect(mapStateToProps)(MyMap);
